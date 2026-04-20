import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { getEngine } from '../simulations/engines/registry';
import { OfflineModuleDto, OfflineModuleDownloadDto } from './dto/offline-module.dto';

@Injectable()
export class OfflineService {
  constructor(private prisma: PrismaService) {}

  async getOfflineModules(usuarioId: string): Promise<OfflineModuleDto[]> {
    const algoritmos = await this.prisma.algoritmo.findMany({
      where: { activo: true },
    });

    // Simular módulos descargados por el usuario (en una implementación real, esto vendría de una tabla de descargas)
    const descargadosIds = new Set<string>(); // TODO: Implementar tracking de descargas

    return algoritmos.map((algoritmo) => {
      const engine = getEngine(algoritmo.nombre);
      const tamanoKB = this.calculateModuleSize(engine);

      return {
        algoritmoId: algoritmo.id,
        nombre: algoritmo.nombre,
        tamanoKB,
        version: '1.0.0', // TODO: Implementar versioning
        descargado: descargadosIds.has(algoritmo.id),
      };
    });
  }

  async downloadModule(algoritmoId: string): Promise<OfflineModuleDownloadDto> {
    const algoritmo = await this.prisma.algoritmo.findUnique({
      where: { id: algoritmoId },
    });

    if (!algoritmo) {
      throw new NotFoundException('Algoritmo no encontrado');
    }

    const engine = getEngine(algoritmo.nombre);

    // Obtener ejercicios
    const ejercicios = await this.prisma.ejercicioPrediccion.findMany({
      where: { algoritmoId },
    });

    return {
      meta: {
        id: algoritmo.id,
        nombre: algoritmo.nombre,
        descripcion: algoritmo.descripcion,
        dificultad: algoritmo.dificultad,
        complejidadTiempo: algoritmo.complejidadTiempo,
        complejidadEspacio: algoritmo.complejidadEspacio,
        categoria: algoritmo.categoria,
      },
      pseudocode: engine.pseudocode,
      ejercicios: ejercicios.map((ejercicio) => ({
        id: ejercicio.id,
        pregunta: ejercicio.pregunta,
        dificultad: ejercicio.dificultad,
        respuestaCorrecta: ejercicio.respuestaCorrecta,
        feedbackPositivo: ejercicio.feedbackPositivo,
        feedbackNegativo: ejercicio.feedbackNegativo,
      })),
    };
  }

  private calculateModuleSize(engine: any): number {
    // Calcular tamaño aproximado en KB basado en el contenido del engine
    const metaSize = JSON.stringify(engine.meta).length;
    const pseudocodeSize = JSON.stringify(engine.pseudocode).length;
    const totalBytes = metaSize + pseudocodeSize;
    return Math.ceil(totalBytes / 1024);
  }
}
