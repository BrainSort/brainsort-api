import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsArray,
  IsNumber,
  IsEnum,
  IsInt,
  IsOptional,
  Min,
  Max,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  IsString,
  IsBoolean,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GrafoDataDto {
  @ApiProperty({
    type: [String],
    description: 'Lista de identificadores de los nodos del grafo',
    example: ['A', 'B', 'C', 'D'],
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(2, { message: 'El grafo debe tener al menos 2 nodos' })
  @ArrayMaxSize(20, { message: 'El grafo debe tener como máximo 20 nodos' })
  nodos: string[];

  @ApiProperty({
    type: [[String]],
    description: 'Lista de aristas representadas como pares [origen, destino]',
    example: [
      ['A', 'B'],
      ['B', 'C'],
      ['C', 'D'],
    ],
  })
  @IsArray()
  aristas: [string, string][];

  @ApiProperty({
    description: 'Indica si el grafo es dirigido',
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  dirigido: boolean;

  @ApiProperty({
    required: false,
    description: 'Mapa opcional de pesos por arista (ej. "A-B": 4)',
  })
  @IsOptional()
  @IsObject()
  pesos?: Record<string, number>;

  @ApiProperty({
    required: false,
    description: 'Lista opcional de aristas ponderadas [origen, destino, peso]',
  })
  @IsOptional()
  @IsArray()
  aristasPonderadas?: [string, string, number][];
}

export class ConjuntoDeDatosDto {
  @ApiProperty({
    required: false,
    type: [Number],
    description: 'Valores del array de datos',
    example: [5, 2, 8, 1, 9],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(2, { message: 'El array debe tener al menos 2 elementos' })
  @ArrayMaxSize(50, { message: 'El array debe tener máximo 50 elementos' })
  valores?: number[];

  @ApiProperty({
    enum: ['Predeterminado', 'Personalizado'],
    description: 'Tipo de origen de los datos',
    example: 'Predeterminado',
  })
  @IsEnum(['Predeterminado', 'Personalizado'])
  tipoOrigen: 'Predeterminado' | 'Personalizado';

  @ApiProperty({
    required: false,
    description: 'Tamaño del array (debe coincidir con valores.length)',
    example: 5,
  })
  @IsOptional()
  @IsInt()
  @Min(2)
  @Max(50)
  tamano?: number;

  @ApiProperty({
    required: false,
    description:
      'Valor objetivo para algoritmos de búsqueda (Lineal / Binaria)',
    example: 8,
  })
  @IsOptional()
  @IsInt()
  objetivo?: number;

  @ApiProperty({
    required: false,
    type: () => GrafoDataDto,
    description: 'Estructura del grafo (para algoritmos BFS, DFS y Dijkstra)',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => GrafoDataDto)
  grafo?: GrafoDataDto;

  @ApiProperty({
    required: false,
    description: 'Nodo inicial del recorrido para algoritmos de grafo',
    example: 'A',
  })
  @IsOptional()
  @IsString()
  nodoInicio?: string;
}

export class CreateSimulationDto {
  @ApiProperty({
    description: 'ID del algoritmo a simular',
    example: 'uuid-del-algoritmo',
  })
  @IsUUID()
  algoritmoId: string;

  @ApiProperty({
    type: ConjuntoDeDatosDto,
    description: 'Conjunto de datos para la simulación',
  })
  @ValidateNested()
  @Type(() => ConjuntoDeDatosDto)
  conjuntoDeDatos: ConjuntoDeDatosDto;

  @ApiProperty({
    required: false,
    description: 'Valor objetivo para algoritmos de búsqueda (0-999)',
    example: 8,
  })
  @IsOptional()
  @IsInt({ message: 'El objetivo debe ser un número entero' })
  @Min(0, { message: 'El objetivo debe ser mayor o igual a 0' })
  @Max(999, { message: 'El objetivo no puede ser mayor a 999' })
  objetivo?: number;
}
