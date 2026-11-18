import { Injectable, NotFoundException } from '@nestjs/common';
import { EventEmitter } from 'events';
import { PrismaService } from '../prisma/prisma.service';
import { BadgeResponseDto } from './dto/badge-response.dto';

export type BadgeTriggerEvent =
  | 'simulation.completed'
  | 'exercise.completed'
  | 'streak.updated';

export interface BadgeEventPayload {
  usuarioId: string;
}

interface BadgeRule {
  criterio: string;
  meetsRequirement: (data: {
    simulacionesCompletadas: number;
    algoritmosVistos: number;
    rachaDias: number;
    algoritmosCompletadosOrdenamiento: number;
    totalOrdenamiento: number;
  }) => boolean;
}

@Injectable()
export class BadgesService {
  private badgesCache: any[] = [];
  private cacheTimestamp: Date | null = null;
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutos
  private readonly eventBus = new EventEmitter();
  private readonly userLocks = new Map<string, Promise<BadgeResponseDto[]>>();
  private readonly awardedPairsCache = new Set<string>();

  private badgeRules: Map<string, BadgeRule> = new Map([
    [
      'Completar 1 simulación',
      {
        criterio: 'Completar 1 simulación',
        meetsRequirement: (data) => data.simulacionesCompletadas >= 1,
      },
    ],
    [
      'Visualizar 3 algoritmos',
      {
        criterio: 'Visualizar 3 algoritmos',
        meetsRequirement: (data) => data.algoritmosVistos >= 3,
      },
    ],
    [
      'rachaDías >= 7',
      {
        criterio: 'rachaDías >= 7',
        meetsRequirement: (data) => data.rachaDias >= 7,
      },
    ],
    [
      'rachaDias >= 7',
      {
        criterio: 'rachaDias >= 7',
        meetsRequirement: (data) => data.rachaDias >= 7,
      },
    ],
    [
      'Completar todos los algoritmos de Ordenamiento',
      {
        criterio: 'Completar todos los algoritmos de Ordenamiento',
        meetsRequirement: (data) =>
          data.totalOrdenamiento > 0 &&
          data.algoritmosCompletadosOrdenamiento >= data.totalOrdenamiento,
      },
    ],
  ]);

  constructor(private prisma: PrismaService) {
    this.registerEventListeners();
    void this.loadBadgesCache();
  }

  private registerEventListeners() {
    const events: BadgeTriggerEvent[] = [
      'simulation.completed',
      'exercise.completed',
      'streak.updated',
    ];

    for (const eventName of events) {
      this.eventBus.on(eventName, (payload: BadgeEventPayload) => {
        if (payload?.usuarioId) {
          void this.checkAndAward(payload.usuarioId).catch(() => {});
        }
      });
    }
  }

  /**
   * Emite un evento de dominio desacoplado para evaluar insignias en segundo plano
   * o retorna las insignias otorgadas si se espera con `emitBadgeEventAsync`.
   */
  emitBadgeEvent(event: BadgeTriggerEvent, payload: BadgeEventPayload): void {
    this.eventBus.emit(event, payload);
  }

  async emitBadgeEventAsync(
    _event: BadgeTriggerEvent,
    payload: BadgeEventPayload,
  ): Promise<BadgeResponseDto[]> {
    return this.checkAndAward(payload.usuarioId);
  }

  private async loadBadgesCache() {
    try {
      const badges = await this.prisma.insignia.findMany();
      this.badgesCache = badges ?? [];
      this.cacheTimestamp = new Date();
    } catch {
      this.badgesCache = [];
      this.cacheTimestamp = null;
    }
  }

  private isCacheValid(): boolean {
    if (!this.cacheTimestamp || this.badgesCache.length === 0) return false;
    const now = new Date();
    return now.getTime() - this.cacheTimestamp.getTime() < this.CACHE_TTL;
  }

  private async getBadgesFromCache(): Promise<any[]> {
    if (!this.isCacheValid()) {
      await this.loadBadgesCache();
    }
    return this.badgesCache;
  }

  invalidateCache() {
    this.cacheTimestamp = null;
    this.badgesCache = [];
    this.awardedPairsCache.clear();
  }

  async getAllBadges(): Promise<BadgeResponseDto[]> {
    const badges = await this.getBadgesFromCache();
    return badges.map((badge) => ({
      id: badge.id,
      nombre: badge.nombre,
      descripcion: badge.descripcion,
      imagen: badge.imagen,
      criterioDesbloqueo: badge.criterioDesbloqueo,
      categoria: badge.categoria ?? 'General',
      desbloqueada: false,
    }));
  }

  async getUserBadges(usuarioId: string): Promise<BadgeResponseDto[]> {
    const allBadges = await this.getBadgesFromCache();
    const progreso = await this.prisma.progresoUsuario.findUnique({
      where: { usuarioId },
    });

    if (!progreso) {
      throw new NotFoundException('Progreso no encontrado');
    }

    const userInsignias = await this.prisma.progresoInsignia.findMany({
      where: { progresoId: progreso.id },
      include: {
        insignia: true,
      },
    });

    const userBadgeMap = new Map<string, Date>();
    for (const ui of userInsignias) {
      userBadgeMap.set(ui.insigniaId, ui.fechaObtencion);
    }

    return allBadges.map((badge) => {
      const desbloqueada = userBadgeMap.has(badge.id);
      return {
        id: badge.id,
        nombre: badge.nombre,
        descripcion: badge.descripcion,
        imagen: badge.imagen,
        criterioDesbloqueo: badge.criterioDesbloqueo,
        categoria: badge.categoria ?? 'General',
        desbloqueada,
        fechaObtencion: desbloqueada ? userBadgeMap.get(badge.id) : undefined,
      };
    });
  }

  /**
   * Evalúa criterios de desbloqueo y persiste de forma atómica e idempotente.
   * Serializa llamadas concurrentes del mismo usuario para evitar condiciones de carrera.
   */
  async checkAndAward(usuarioId: string): Promise<BadgeResponseDto[]> {
    const previousLock = this.userLocks.get(usuarioId) ?? Promise.resolve([]);

    const currentExecution = previousLock
      .catch(() => [])
      .then(() => this.executeCheckAndAward(usuarioId));

    this.userLocks.set(usuarioId, currentExecution);

    try {
      return await currentExecution;
    } finally {
      if (this.userLocks.get(usuarioId) === currentExecution) {
        this.userLocks.delete(usuarioId);
      }
    }
  }

  private async executeCheckAndAward(
    usuarioId: string,
  ): Promise<BadgeResponseDto[]> {
    const progreso = await this.prisma.progresoUsuario.findUnique({
      where: { usuarioId },
    });

    if (!progreso) {
      throw new NotFoundException('Progreso no encontrado');
    }

    const allBadges = await this.getBadgesFromCache();
    const userInsignias = await this.prisma.progresoInsignia.findMany({
      where: { progresoId: progreso.id },
    });
    const userBadgeIds = new Set(userInsignias.map((ui) => ui.insigniaId));

    for (const existingId of userBadgeIds) {
      this.awardedPairsCache.add(`${progreso.id}:${existingId}`);
    }

    // Obtener datos para evaluación de reglas
    const simulacionesCompletadas = await this.prisma.sesionSimulacion.count({
      where: { usuarioId, completada: true },
    });

    const sesionesAlgoritmos = await this.prisma.sesionSimulacion.findMany({
      where: { usuarioId },
      select: { algoritmoId: true },
    });
    const algoritmosVistos = new Set(
      sesionesAlgoritmos.map((s) => s.algoritmoId),
    ).size;

    const algoritmosOrdenamiento = await this.prisma.algoritmo.count({
      where: { categoria: 'Ordenamiento', activo: true },
    });

    const sesionesOrdenamiento = await this.prisma.sesionSimulacion.findMany({
      where: {
        usuarioId,
        completada: true,
        algoritmo: { categoria: 'Ordenamiento' },
      },
      select: { algoritmoId: true },
    });
    const algoritmosCompletadosOrdenamiento = new Set(
      sesionesOrdenamiento.map((s) => s.algoritmoId),
    ).size;

    const data = {
      simulacionesCompletadas,
      algoritmosVistos,
      rachaDias: progreso.rachaDias,
      algoritmosCompletadosOrdenamiento,
      totalOrdenamiento: algoritmosOrdenamiento,
    };

    const newlyAwarded: BadgeResponseDto[] = [];

    const persistAward = async (client: any) => {
      for (const badge of allBadges) {
        const pairKey = `${progreso.id}:${badge.id}`;
        if (userBadgeIds.has(badge.id) || this.awardedPairsCache.has(pairKey)) {
          continue; // Ya tiene la insignia (idempotencia)
        }

        const rule = this.badgeRules.get(badge.criterioDesbloqueo);
        if (rule && rule.meetsRequirement(data)) {
          const fechaObtencion = new Date();
          try {
            await client.progresoInsignia.create({
              data: {
                progresoId: progreso.id,
                insigniaId: badge.id,
                fechaObtencion,
              },
            });
            userBadgeIds.add(badge.id);
            this.awardedPairsCache.add(pairKey);
            newlyAwarded.push({
              id: badge.id,
              nombre: badge.nombre,
              descripcion: badge.descripcion,
              imagen: badge.imagen,
              criterioDesbloqueo: badge.criterioDesbloqueo,
              categoria: badge.categoria ?? 'General',
              desbloqueada: true,
              fechaObtencion,
            });
          } catch (error: any) {
            // P2002 = Unique constraint violation en Prisma (idempotencia concurrente)
            if (error?.code === 'P2002') {
              userBadgeIds.add(badge.id);
              this.awardedPairsCache.add(pairKey);
              continue;
            }
            throw error;
          }
        }
      }
    };

    if (typeof (this.prisma as any).$transaction === 'function') {
      await (this.prisma as any).$transaction(async (tx: any) => {
        await persistAward(tx ?? this.prisma);
      });
    } else {
      await persistAward(this.prisma);
    }

    return newlyAwarded;
  }
}
