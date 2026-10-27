import { AlgorithmDefinition, SimulationStep } from '../engine.interface';

export const BinarySearch: AlgorithmDefinition = {
  meta: {
    nombre: 'Binary Search',
    descripcion: 'Descarta mitades de un arreglo ordenado.',
    complejidadTiempo: 'O(log n)',
    complejidadEspacio: 'O(1)',
    categoria: 'Busqueda',
  },
  execute(data: number[], target?: number): SimulationStep[] {
    const array = [...data].sort((a, b) => a - b);
    const resolvedTarget =
      target !== undefined ? target : array[Math.floor(array.length * 0.65)];
    const steps: SimulationStep[] = [];
    let step = 1;
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      steps.push({
        numeroPaso: step++,
        tipoOperacion: 'comparacion',
        indicesActivos: [low, mid, high],
        estadoArray: [...array],
        lineaPseudocodigo: 3,
      });

      if (array[mid] === resolvedTarget) {
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'final',
          indicesActivos: [mid],
          estadoArray: [...array],
          lineaPseudocodigo: 4,
        });
        return steps;
      }

      const moveRight = array[mid] < resolvedTarget;
      if (moveRight) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }

      steps.push({
        numeroPaso: step++,
        tipoOperacion: 'insercion',
        indicesActivos: [],
        estadoArray: [...array],
        lineaPseudocodigo: moveRight ? 5 : 6,
      });
    }

    steps.push({
      numeroPaso: step++,
      tipoOperacion: 'final',
      indicesActivos: [],
      estadoArray: [...array],
      lineaPseudocodigo: 6,
    });
    return steps;
  },
};
