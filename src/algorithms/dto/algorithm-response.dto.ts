import { ApiProperty } from '@nestjs/swagger';

/** Tarjeta de algoritmo para la biblioteca (CO1) — descripción truncada a ≤140 caracteres. */
export class AlgorithmLibraryCardDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty({ description: 'Descripción corta para tarjeta (máx. 140 caracteres)' })
  descripcion: string;

  @ApiProperty()
  dificultad: string;

  @ApiProperty()
  complejidadTiempo: string;

  @ApiProperty()
  complejidadEspacio: string;

  @ApiProperty({ enum: ['Ordenamiento', 'Busqueda', 'EstructurasLineales'] })
  categoria: string;
}

export class LibraryResponseDto {
  @ApiProperty({
    type: [String],
    example: ['Ordenamiento', 'Busqueda', 'EstructurasLineales'],
  })
  categorias: string[];

  @ApiProperty()
  totalAlgoritmos: number;

  @ApiProperty({ type: [AlgorithmLibraryCardDto] })
  algoritmos: AlgorithmLibraryCardDto[];
}
