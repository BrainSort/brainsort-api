import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { executeWithTimeout } from './engines/registry';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { SimulationStepDto } from './dto/simulation-step.dto';
import { BadgesService } from '../badges/badges.service';

@Injectable()
export class SimulationsService {
  constructor(
    private prisma: PrismaService,
    private badgesService: BadgesService,
  ) {}

  async createSimulation(
    createSimulationDto: CreateSimulationDto,
    usuarioId: string,
  ): Promise<{ pasos: SimulationStepDto[]; sesionId: string }> {
    const { algoritmoId, conjuntoDeDatos } = createSimulationDto;

    // 1. Validar que el algoritmo existe
    const algoritmo = await this.prisma.algoritmo.findUnique({
      where: { id: algoritmoId, activo: true },
    });

    if (!algoritmo) {
      throw new NotFoundException('Algoritmo no encontrado');
    }

    // 2. Validar datos
    this.validateData(conjuntoDeDatos);

    // 3. Generar arreglo aleatorio si es Predeterminado
    let data = conjuntoDeDatos.valores;
    if (conjuntoDeDatos.tipoOrigen === 'Predeterminado') {
      data = this.generateRandomArray();
    }

    // 4. Ejecutar el engine con timeout
    let steps;
    try {
      steps = await executeWithTimeout(algoritmo.nombre, data);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error al ejecutar la simulación',
      );
    }

    // 5. Crear SesionSimulacion
    const sesion = await this.prisma.sesionSimulacion.create({
      data: {
        usuarioId,
        algoritmoId,
        pasosCompletados: 0,
        totalPasos: steps.length,
        completada: false,
        fechaInicio: new Date(),
      },
    });

    // 6. Verificar insignias post-completar
    await this.badgesService.checkAndAward(usuarioId);

    // 7. Retornar simulación completa
    return {
      pasos: steps.map((step) => ({
        numeroPaso: step.numeroPaso,
        tipoOperacion: step.tipoOperacion,
        indicesActivos: step.indicesActivos,
        estadoArray: step.estadoArray,
        lineaPseudocodigo: step.lineaPseudocodigo,
      })),
      sesionId: sesion.id,
    };
  }

  private validateData(
    conjuntoDeDatos: CreateSimulationDto['conjuntoDeDatos'],
  ): void {
    const { valores, tamano } = conjuntoDeDatos;

    // Validar que no haya valores nulos
    if (valores.some((v) => v === null || v === undefined)) {
      throw new BadRequestException('Los valores no pueden ser nulos');
    }

    // Validar que todos sean números
    if (valores.some((v) => !Number.isInteger(v) || v < 0 || v > 999)) {
      throw new BadRequestException(
        'Los valores deben ser enteros positivos entre 0 y 999',
      );
    }

    // Validar que tamaño coincida con valores.length
    if (tamano !== valores.length) {
      throw new BadRequestException(
        'El tamaño debe coincidir con la cantidad de valores',
      );
    }
  }

  private generateRandomArray(): number[] {
    const size = Math.floor(Math.random() * (15 - 8 + 1)) + 8; // 8-15 elementos
    const array: number[] = [];

    for (let i = 0; i < size; i++) {
      array.push(Math.floor(Math.random() * 100)); // Valores entre 0-99
    }

    // Verificar que no esté pre-ordenado (no debe estar ordenado ascendente)
    const isSorted = array.every((val, i, arr) => !i || arr[i - 1] <= val);
    if (isSorted) {
      // Si está ordenado, mezclarlo
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    return array;
  }

  async updateSessionProgress(
    sesionId: string,
    pasosCompletados: number,
  ): Promise<void> {
    await this.prisma.sesionSimulacion.update({
      where: { id: sesionId },
      data: {
        pasosCompletados,
        completada: pasosCompletados >= 100, // Asumiendo que el frontend envía porcentaje
        fechaFin: pasosCompletados >= 100 ? new Date() : null,
      },
    });
  }
}
