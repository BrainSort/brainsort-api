import { AlgorithmDefinition, SimulationStep } from './engine.interface';

const MAX_ITERATIONS = 10000;

export const SelectionSort: AlgorithmDefinition = {
  meta: {
    nombre: 'Selection Sort',
    descripcion:
      'Algoritmo que divide la lista en una parte ordenada y otra desordenada, encontrando siempre el mínimo elemento de la parte desordenada.',
    complejidadTiempo: 'O(n²)',
    complejidadEspacio: 'O(1)',
    categoria: 'Ordenamiento',
  },
  pseudocode: [
    { line: 1, text: 'Para i = 0 hasta n-1', indent: 0 },
    { line: 2, text: 'minIndex = i', indent: 1 },
    { line: 3, text: 'Para j = i+1 hasta n', indent: 1 },
    { line: 4, text: 'Si array[j] < array[minIndex]', indent: 2 },
    { line: 5, text: 'minIndex = j', indent: 3 },
    { line: 6, text: 'Intercambiar array[i] con array[minIndex]', indent: 1 },
  ],
  execute(data: number[]): SimulationStep[] {
    const array = [...data];
    const n = array.length;
    const steps: SimulationStep[] = [];
    let stepCount = 1;
    let iterations = 0;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        iterations++;
        if (iterations > MAX_ITERATIONS) {
          throw new Error('Timeout: Maximum iteration limit reached in engine');
        }

        // Comparación (línea 4)
        steps.push({
          numeroPaso: stepCount++,
          tipoOperacion: 'comparacion',
          indicesActivos: [j, minIndex],
          estadoArray: [...array],
          lineaPseudocodigo: 4,
        });

        if (array[j] < array[minIndex]) {
          minIndex = j;
          // No generamos 'intercambio' en UI aquí, sólo asignamos índice
        }
      }

      if (minIndex !== i) {
        // Intercambio (línea 6)
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        steps.push({
          numeroPaso: stepCount++,
          tipoOperacion: 'intercambio',
          indicesActivos: [i, minIndex], // Los índices involucrados en el swap
          estadoArray: [...array],
          lineaPseudocodigo: 6,
        });
      }
    }

    // Paso final de cierre
    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'final',
      indicesActivos: [],
      estadoArray: [...array],
      lineaPseudocodigo: 1,
    });

    return steps;
  },
};
