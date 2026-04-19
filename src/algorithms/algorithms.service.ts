import { Injectable } from '@nestjs/common';
import { CategoriaAlgoritmo, Prisma } from '../../generated/prisma';
import { PrismaService } from '../prisma/prisma.service';
import { LibraryQueryDto } from './dto/library-query.dto';
import {
  AlgorithmLibraryCardDto,
  LibraryResponseDto,
} from './dto/algorithm-response.dto';

const DESCRIPCION_TARJETA_MAX = 140;

const CATEGORIAS_ORDEN: CategoriaAlgoritmo[] = [
  CategoriaAlgoritmo.Ordenamiento,
  CategoriaAlgoritmo.Busqueda,
  CategoriaAlgoritmo.EstructurasLineales,
];

@Injectable()
export class AlgorithmsService {
  constructor(private readonly prisma: PrismaService) {}

  private truncarDescripcion(texto: string): string {
    if (texto.length <= DESCRIPCION_TARJETA_MAX) {
      return texto;
    }
    return texto.slice(0, DESCRIPCION_TARJETA_MAX);
  }

  private aTarjeta(
    row: Prisma.AlgoritmoGetPayload<Record<string, never>>,
  ): AlgorithmLibraryCardDto {
    return {
      id: row.id,
      nombre: row.nombre,
      descripcion: this.truncarDescripcion(row.descripcion),
      dificultad: row.dificultad,
      complejidadTiempo: row.complejidadTiempo,
      complejidadEspacio: row.complejidadEspacio,
      categoria: row.categoria,
    };
  }

  async getLibrary(query: LibraryQueryDto): Promise<LibraryResponseDto> {
    const where: Prisma.AlgoritmoWhereInput = {
      activo: true,
    };

    if (query.categoria) {
      where.categoria = query.categoria;
    }

    const nombre = query.nombre?.trim();
    if (nombre) {
      where.nombre = {
        contains: nombre,
        mode: Prisma.QueryMode.insensitive,
      };
    }

    const algoritmos = await this.prisma.algoritmo.findMany({
      where,
      orderBy: [{ categoria: 'asc' }, { nombre: 'asc' }],
    });

    const totalAlgoritmos = await this.prisma.algoritmo.count({ where });

    return {
      categorias: CATEGORIAS_ORDEN,
      totalAlgoritmos,
      algoritmos: algoritmos.map((a) => this.aTarjeta(a)),
    };
  }
}
