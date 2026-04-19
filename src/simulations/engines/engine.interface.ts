export interface AlgorithmDefinition {
  meta: {
    nombre: string;
    descripcion: string;
    complejidadTiempo: string;
    complejidadEspacio: string;
    categoria: string;
  };
  pseudocode: PseudocodeLine[];
  execute(data: number[]): SimulationStep[];
}

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

export interface SimulationStep {
  numeroPaso: number;
  tipoOperacion: TipoOperacion;
  indicesActivos: number[]; // Índices en el arreglo que están siendo modificados o comparados
  estadoArray: number[]; // Clon del estado del arreglo en este paso
  lineaPseudocodigo: number; // Índice base 1 correspondiente a PseudocodeLine
}
