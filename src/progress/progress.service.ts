import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  LeaderboardResponseDto,
  ProgressResponseDto,
} from './dto/progress-response.dto';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class ProgressService {
  constructor(
    private prisma: PrismaService,
    private badgesService: BadgesService,
  ) {}

  async getUserProgress(usuarioId: string): Promise<ProgressResponseDto> {
    const progreso = await this.prisma.progresoUsuario.findUnique({
      where: { usuarioId },
      include: {
        usuario: {
          select: {
            nombre: true,
          },
        },
        insignias: {
          include: {
            insignia: true,
          },
        },
      },
    });

    if (!progreso) {
      throw new NotFoundException('Progreso no encontrado');
    }

    // Obtener estadísticas
    const simulacionesCompletadas = await this.prisma.sesionSimulacion.count({
      where: {
        usuarioId,
        completada: true,
      },
    });

    const ejerciciosTotales = await this.prisma.ejercicioPrediccion.count({
      where: {
        algoritmo: {
          activo: true,
        },
      },
    });

    const respuestasCorrectasUnicas =
      await this.prisma.respuestaEjercicio.findMany({
        where: {
          usuarioId,
          correcto: true,
          ejercicio: {
            algoritmo: {
              activo: true,
            },
          },
        },
        select: {
          ejercicioId: true,
        },
        distinct: ['ejercicioId'],
      });

    const ejerciciosCorrectos = respuestasCorrectasUnicas.length;

    // Formatear insignias
    const insignias = progreso.insignias.map((ui) => ({
      id: ui.insignia.id,
      nombre: ui.insignia.nombre,
      descripcion: ui.insignia.descripcion,
      imagen: ui.insignia.imagen,
      fechaObtencion: ui.fechaObtencion,
    }));

    // Recalcular ranking
    const posicionRanking = await this.calculateRanking(progreso.puntosTotales);

    // Obtener desglose de progreso por algoritmo
    const algoritmos = await this.prisma.algoritmo.findMany({
      where: { activo: true },
      include: {
        ejercicios: {
          select: {
            id: true,
          },
        },
      },
    });

    const respuestasCorrectas = await this.prisma.respuestaEjercicio.findMany({
      where: {
        usuarioId,
        correcto: true,
      },
      select: {
        ejercicioId: true,
      },
    });

    const correctIds = new Set(respuestasCorrectas.map((r) => r.ejercicioId));

    const algoritmosProgreso = algoritmos.map((algo) => {
      const ejerciciosTotales = algo.ejercicios.length;
      const ejerciciosCorrectos = algo.ejercicios.filter((ej) =>
        correctIds.has(ej.id),
      ).length;

      return {
        algoritmoId: algo.id,
        ejerciciosCorrectos,
        ejerciciosTotales,
      };
    });

    return {
      puntosTotales: progreso.puntosTotales,
      nivelActual: progreso.nivelActual,
      rachaDias: progreso.rachaDias,
      posicionRanking,
      ultimaActividad: progreso.ultimaActividad,
      insignias,
      simulacionesCompletadas,
      ejerciciosCorrectos,
      ejerciciosTotales,
      algoritmosProgreso,
    };
  }

  async getRanking(
    limit: number = 20,
    offset: number = 0,
  ): Promise<LeaderboardResponseDto> {
    const ranking = await this.prisma.progresoUsuario.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        puntosTotales: 'desc',
      },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
    });

    const total = await this.prisma.progresoUsuario.count();

    return {
      ranking: ranking
        .filter((item) => item.usuario)
        .map((item, index) => ({
          usuarioId: item.usuario.id,
          nombre: item.usuario.nombre,
          puntosTotales: item.puntosTotales,
          posicion: offset + index + 1,
          rachaDias: item.rachaDias,
          nivelActual: item.nivelActual,
        })),
      total,
    };
  }

  async updateProgress(
    usuarioId: string,
    puntosGanados: number,
  ): Promise<void> {
    const progreso = await this.prisma.progresoUsuario.findUnique({
      where: { usuarioId },
    });

    if (!progreso) {
      throw new NotFoundException('Progreso no encontrado');
    }

    // Actualizar puntos
    progreso.puntosTotales += puntosGanados;

    // Actualizar racha antes de actualizar ultimaActividad
    this.updateStreak(progreso);

    // Recalcular nivel
    progreso.nivelActual = this.calculateLevel(progreso.puntosTotales);

    // Recalcular ranking
    progreso.posicionRanking = await this.calculateRanking(
      progreso.puntosTotales,
    );

    // Actualizar última actividad
    progreso.ultimaActividad = new Date();

    await this.prisma.progresoUsuario.update({
      where: { usuarioId },
      data: {
        puntosTotales: progreso.puntosTotales,
        nivelActual: progreso.nivelActual,
        rachaDias: progreso.rachaDias,
        posicionRanking: progreso.posicionRanking,
        ultimaActividad: progreso.ultimaActividad,
      },
    });

    // Verificar insignias post-racha
    await this.badgesService.checkAndAward(usuarioId);
  }

  private updateStreak(progreso: {
    rachaDias: number;
    ultimaActividad: Date | string | null;
  }): void {
    const now = new Date();
    const ultimaActividad = progreso.ultimaActividad
      ? new Date(progreso.ultimaActividad)
      : null;

    if (!ultimaActividad || progreso.rachaDias <= 0) {
      progreso.rachaDias = 1;
      return;
    }

    const daysDiff = this.getDaysDifference(ultimaActividad, now);

    if (daysDiff <= 0) {
      return;
    } else if (daysDiff === 1) {
      progreso.rachaDias += 1;
    } else {
      progreso.rachaDias = 1;
    }
  }

  private getDaysDifference(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const utc1 = Date.UTC(
      date1.getUTCFullYear(),
      date1.getUTCMonth(),
      date1.getUTCDate(),
    );
    const utc2 = Date.UTC(
      date2.getUTCFullYear(),
      date2.getUTCMonth(),
      date2.getUTCDate(),
    );
    return Math.round((utc2 - utc1) / oneDay);
  }

  /**
   * Calcula el nivel del usuario usando la fórmula cuadrática del spec.
   * Referencia: gamification-xp-progression.spec.md §3.1
   * Fórmula: nivel = floor((-1 + sqrt(1 + 4*XP/50)) / 2), clamped [1, 32]
   * XP acumulado para nivel n = 50n(n+1)
   */
  private calculateLevel(puntosTotales: number): number {
    if (puntosTotales <= 0) return 1;
    const nivel = Math.floor(
      (-1 + Math.sqrt(1 + (4 * puntosTotales) / 50)) / 2,
    );
    return Math.min(Math.max(nivel, 1), 32);
  }

  private async calculateRanking(puntosTotales: number): Promise<number> {
    const usuariosConMasPuntos = await this.prisma.progresoUsuario.count({
      where: {
        puntosTotales: { gt: puntosTotales },
      },
    });

    return usuariosConMasPuntos + 1;
  }
}
