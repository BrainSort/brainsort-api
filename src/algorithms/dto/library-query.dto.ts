import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

const CATEGORIAS_ALGORITMO = [
  'Ordenamiento',
  'Busqueda',
  'EstructurasLineales',
] as const;

export type CategoriaAlgoritmoQuery = (typeof CATEGORIAS_ALGORITMO)[number];

export class LibraryQueryDto {
  @ApiPropertyOptional({
    description: 'Filtra algoritmos por categoría',
    enum: CATEGORIAS_ALGORITMO,
  })
  @IsOptional()
  @IsIn(CATEGORIAS_ALGORITMO)
  categoria?: CategoriaAlgoritmoQuery;

  @ApiPropertyOptional({
    description:
      'Búsqueda por nombre (coincidencia parcial, sin distinguir mayúsculas)',
  })
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(120)
  nombre?: string;
}
