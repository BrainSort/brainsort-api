import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  ProgressResponseDto,
  RankingResponseDto,
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

    const ejerciciosCorrectos = await this.prisma.respuestaEjercicio.count({
      where: {
        usuarioId,
        correcto: true,
      },
    });

    const ejerciciosTotales = await this.prisma.respuestaEjercicio.count({
      where: {
        usuarioId,
      },
    });

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
    };
  }

  async getRanking(
    limit: number = 20,
    offset: number = 0,
  ): Promise<RankingResponseDto[]> {
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

    return ranking
      .filter((item) => item.usuario)
      .map((item, index) => ({
        usuarioId: item.usuario.id,
        nombre: item.usuario.nombre,
        puntosTotales: item.puntosTotales,
        posicion: offset + index + 1,
        rachaDias: item.rachaDias,
        nivelActual: item.nivelActual,
      }));
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
        posicionRanking: progreso.posicionRanking,
        ultimaActividad: progreso.ultimaActividad,
      },
    });

    // Verificar insignias post-racha
    await this.badgesService.checkAndAward(usuarioId);
  }

  private calculateLevel(puntosTotales: number): number {
    if (puntosTotales < 100) return 1;
    if (puntosTotales < 300) return 2;
    if (puntosTotales < 600) return 3;
    if (puntosTotales < 1000) return 4;
    return 5;
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
