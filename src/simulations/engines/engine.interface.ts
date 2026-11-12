/**
 * Opciones adicionales que algunos engines aceptan (p. ej. búsqueda).
 * Todos los campos son opcionales para mantener compatibilidad.
 */
export interface EngineOptions {
  /** Valor objetivo para algoritmos de búsqueda */
  objetivo?: number;
}

export interface AlgorithmDefinition {
  meta: {
    nombre: string;
    descripcion: string;
    complejidadTiempo: string;
    complejidadEspacio: string;
    categoria: string;
  };
  execute(data: number[], options?: EngineOptions): SimulationStep[];
}

// Tipo para el pseudocódigo almacenado en la base de datos
export type PseudocodeDB = PseudocodeLine[];

export interface PseudocodeLine {
  line: number; // Índice base 1
  text: string; // Texto de la línea de pseudocódigo
  indent: number; // Nivel de indentación espacial
}

export type TipoOperacion =
  | 'comparacion'
  | 'intercambio'
  | 'insercion'
  | 'final'
  | 'idle';

export interface SimulationMarker {
  index: number;
  label: string;
  role: string;
  color: string;
}

export type ResultadoBusqueda = 'buscando' | 'encontrado' | 'noEncontrado';

export interface SimulationStepContext {
  waitingIndices?: number[];
  // ─── Campos de búsqueda (Linear / Binary Search) ───
  /** Valor buscado */
  objetivo?: number;
  /** Índice evaluado en Búsqueda Lineal */
  puntero?: number;
  /** Límite izquierdo en Búsqueda Binaria */
  left?: number;
  /** Límite derecho en Búsqueda Binaria */
  right?: number;
  /** Punto medio en Búsqueda Binaria */
  mid?: number;
  /** Comparaciones acumuladas hasta este paso */
  comparaciones?: number;
  /** Estado de la búsqueda en este paso */
  resultado?: ResultadoBusqueda;
  /** Índice donde se localizó el objetivo (solo si resultado = encontrado) */
  indiceEncontrado?: number;
}

export interface SimulationTreeNode {
  index: number;
  value: number | null;
  level: number;
  position: number;
  label?: string;
}

export interface SimulationStep {
  numeroPaso: number;
  tipoOperacion: TipoOperacion;
  indicesActivos: number[]; // Índices en el arreglo que están siendo modificados o comparados
  estadoArray: number[]; // Clon del estado del arreglo en este paso
  lineaPseudocodigo: number; // Índice base 1 correspondiente a PseudocodeLine
  contexto?: SimulationStepContext;
  marcadores?: SimulationMarker[];
  nodosArbol?: SimulationTreeNode[];
}
