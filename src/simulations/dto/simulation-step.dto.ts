import { ApiProperty } from '@nestjs/swagger';
import {
  TipoOperacion,
  SimulationMarker,
  SimulationTreeNode,
  SimulationStepContext,
  GrafoData,
} from '../../simulations/engines/engine.interface';

const TIPOS_OPERACION: TipoOperacion[] = [
  'idle',
  'comparacion',
  'intercambio',
  'insercion',
  'final',
  'descarte',
  'encontrado',
  'no_encontrado',
  'visita',
  'encolar',
  'desencolar',
  'apilar',
  'desapilar',
  'relajacion',
];

export class SimulationStepDto {
  @ApiProperty({ description: 'Número del paso en la simulación' })
  numeroPaso: number;

  @ApiProperty({
    description: 'Tipo de operación realizada',
    enum: TIPOS_OPERACION,
  })
  tipoOperacion: TipoOperacion;

  @ApiProperty({
    required: false,
    enum: ['array', 'grafo'],
    description: 'Discriminador de estructura: array o grafo',
  })
  tipoEstructura?: 'array' | 'grafo';

  @ApiProperty({
    required: false,
    type: [Number],
    description: 'Índices del array siendo modificados o comparados',
  })
  indicesActivos?: number[];

  @ApiProperty({
    required: false,
    type: [Number],
    description: 'Estado del array en este paso',
  })
  estadoArray?: number[];

  @ApiProperty({
    required: false,
    description: 'ID o etiqueta del nodo activo (tipo grafo)',
    nullable: true,
  })
  nodoActual?: string | null;

  @ApiProperty({
    required: false,
    type: [String],
    description: 'Lista ordenada de nodos visitados (tipo grafo)',
  })
  visitados?: string[];

  @ApiProperty({
    required: false,
    type: [String],
    description:
      'Frontera de exploración: cola en BFS o pila en DFS (tipo grafo)',
  })
  frontera?: string[];

  @ApiProperty({
    required: false,
    type: [String],
    description: 'Arista explorada en este paso [origen, destino] (tipo grafo)',
  })
  aristaActiva?: [string, string];

  @ApiProperty({
    required: false,
    description: 'Estructura del grafo (opcional, ej. Dijkstra)',
  })
  grafo?: GrafoData;

  @ApiProperty({
    required: false,
    description: 'Distancias acumuladas por nodo (Dijkstra)',
  })
  distancias?: Record<string, number>;

  @ApiProperty({
    required: false,
    description: 'Mapa de predecesores (Dijkstra)',
  })
  caminoPrevio?: Record<string, string | null>;

  @ApiProperty({
    required: false,
    description: 'Nodo vecino evaluado actualmente (Dijkstra)',
    nullable: true,
  })
  nodoEvaluado?: string | null;

  @ApiProperty({
    required: false,
    description: 'Indica si hubo relajación de arista (Dijkstra)',
  })
  relajacion?: boolean;

  @ApiProperty({
    description: 'Línea de pseudocódigo correspondiente (base 1)',
  })
  lineaPseudocodigo: number;

  @ApiProperty({
    required: false,
    description:
      'Marcadores visuales enriquecidos desde la configuración del algoritmo',
  })
  marcadores?: SimulationMarker[];

  @ApiProperty({
    required: false,
    description: 'Nodos explícitos para visualizaciones de árbol',
  })
  nodosArbol?: SimulationTreeNode[];

  @ApiProperty({
    required: false,
    description:
      'Contexto estructurado del paso (punteros, límites, comparaciones, etc.)',
  })
  contexto?: SimulationStepContext | Record<string, unknown>;
}
