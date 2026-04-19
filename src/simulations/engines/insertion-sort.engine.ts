import { AlgorithmDefinition, SimulationStep } from './engine.interface';

const MAX_ITERATIONS = 10000;

export const InsertionSort: AlgorithmDefinition = {
  meta: {
    nombre: 'Insertion Sort',
    descripcion:
      'Algoritmo que construye el arreglo ordenado de uno en uno, insertando cada elemento en su posición correcta dentro de la sublista ya ordenada.',
    complejidadTiempo: 'O(n²)',
    complejidadEspacio: 'O(1)',
    categoria: 'Ordenamiento',
  },
  pseudocode: [
    { line: 1, text: 'Para i = 1 hasta n-1', indent: 0 },
    { line: 2, text: 'key = array[i]', indent: 1 },
    { line: 3, text: 'j = i - 1', indent: 1 },
    { line: 4, text: 'Mientras j >= 0 y array[j] > key', indent: 1 },
    { line: 5, text: 'array[j+1] = array[j]', indent: 2 },
    { line: 6, text: 'j = j - 1', indent: 2 },
    { line: 7, text: 'array[j+1] = key', indent: 1 },
  ],
  execute(data: number[]): SimulationStep[] {
    const array = [...data];
    const n = array.length;
    const steps: SimulationStep[] = [];
    let stepCount = 1;
    let iterations = 0;

    for (let i = 1; i < n; i++) {
      const key = array[i];
      let j = i - 1;

      while (j >= 0) {
        iterations++;
        if (iterations > MAX_ITERATIONS) {
          throw new Error('Timeout: Maximum iteration limit reached in engine');
        }

        // Comparación evaluando la condicion en linea 4
        steps.push({
          numeroPaso: stepCount++,
          tipoOperacion: 'comparacion',
          indicesActivos: [j, j + 1],
          estadoArray: [...array],
          lineaPseudocodigo: 4,
        });

        if (array[j] > key) {
          array[j + 1] = array[j];
          // Inserción / Desplazamiento (línea 5)
          steps.push({
            numeroPaso: stepCount++,
            tipoOperacion: 'insercion',
            indicesActivos: [j, j + 1],
            estadoArray: [...array],
            lineaPseudocodigo: 5,
          });
          j = j - 1;
        } else {
          break;
        }
      }

      // Al final insertamos el key
      array[j + 1] = key;
      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'insercion',
        indicesActivos: [j + 1],
        estadoArray: [...array],
        lineaPseudocodigo: 7,
      });
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
