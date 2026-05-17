import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DiagnosticsService {
  constructor(private prisma: PrismaService) {}

  async getPreguntas() {
    // Retornar preguntas omitiendo la respuesta correcta
    const preguntas = await this.prisma.preguntaDiagnostico.findMany({
      select: {
        id: true,
        pregunta: true,
        opciones: true,
      },
      orderBy: { createdAt: 'asc' },
    });
    return preguntas;
  }

  async evaluar(usuarioId: string, respuestasUsuario: number[]) {
    const preguntas = await this.prisma.preguntaDiagnostico.findMany({
      orderBy: { createdAt: 'asc' },
    });

    if (respuestasUsuario.length !== preguntas.length) {
      throw new BadRequestException(
        'El número de respuestas no coincide con las preguntas',
      );
    }

    let correctas = 0;
    preguntas.forEach((p, index) => {
      if (p.indiceCorrecto === respuestasUsuario[index]) {
        correctas++;
      }
    });

    const puntaje =
      preguntas.length > 0
        ? Math.round((correctas / preguntas.length) * 100)
        : 0;

    // Guardar resultado
    await this.prisma.resultadoDiagnostico.upsert({
      where: { usuarioId },
      update: { puntaje, fechaEvaluacion: new Date() },
      create: { usuarioId, puntaje },
    });

    // Generar Ruta de Aprendizaje (Lógica V1)
    // Obtener los algoritmos existentes
    const algoritmos = await this.prisma.algoritmo.findMany({
      where: { activo: true },
      select: { id: true, nombre: true },
    });

    // En un caso real, esto usaría tags y complejidad.
    // Aquí hacemos un enrutamiento dummy basado en el puntaje.
    const bubble = algoritmos.find((a) =>
      a.nombre.toLowerCase().includes('bubble'),
    )?.id;
    const selection = algoritmos.find((a) =>
      a.nombre.toLowerCase().includes('selection'),
    )?.id;
    const insertion = algoritmos.find((a) =>
      a.nombre.toLowerCase().includes('insertion'),
    )?.id;

    let algoritmosId = [];
    if (bubble && selection && insertion) {
      if (puntaje < 50) {
        algoritmosId = [bubble, selection, insertion];
      } else {
        algoritmosId = [insertion, selection, bubble];
      }
    } else {
      algoritmosId = algoritmos.map((a) => a.id);
    }

    const ruta = await this.prisma.rutaAprendizaje.upsert({
      where: { usuarioId },
      update: { algoritmosId },
      create: { usuarioId, algoritmosId },
    });

    return {
      puntaje,
      rutaGenerada: ruta.id,
      algoritmosSugeridos: algoritmosId.length,
    };
  }
}
