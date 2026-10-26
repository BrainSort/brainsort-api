import {
  AlgorithmDefinition,
  EngineOptions,
  SimulationMarker,
  SimulationStep,
} from '../engine.interface';

/**
 * Motor modular de Búsqueda Lineal.
 * Cumple con DoD: trazas estructuradas, marcadores de puntero e índice actual.
 * Complejidad: Tiempo O(N), Espacio O(1).
 */
export const LinearSearch: AlgorithmDefinition = {
  meta: {
    nombre: 'Linear Search',
    descripcion: 'Revisa secuencialmente cada elemento hasta encontrar el objetivo o llegar al final.',
    complejidadTiempo: 'O(n)',
    complejidadEspacio: 'O(1)',
    categoria: 'Busqueda',
  },
  execute(data: number[], options?: EngineOptions): SimulationStep[] {
    const array = [...data];
    const steps: SimulationStep[] = [];

    // Si data está vacío (caso borde del motor)
    if (array.length === 0) {
      steps.push({
        numeroPaso: 1,
        tipoOperacion: 'final',
        indicesActivos: [],
        estadoArray: [],
        lineaPseudocodigo: 4,
        contexto: {
          objetivo: options?.objetivo,
          comparaciones: 0,
          resultado: 'noEncontrado',
        },
        marcadores: [],
      });
      return steps;
    }

    // Si no se especifica objetivo, usar valor del elemento medio o primero como fallback retrocompatible
    const target =
      options?.objetivo !== undefined
        ? options.objetivo
        : (array[Math.floor(array.length / 2)] ?? array[0]);

    let step = 1;
    let comparaciones = 0;

    for (let i = 0; i < array.length; i++) {
      comparaciones++;
      const isMatch = array[i] === target;

      const marker: SimulationMarker = {
        index: i,
        label: `i=${i}`,
        role: 'activo',
        color: '#F5A623',
      };

      steps.push({
        numeroPaso: step++,
        tipoOperacion: 'comparacion',
        indicesActivos: [i],
        estadoArray: [...array],
        lineaPseudocodigo: 2,
        contexto: {
          objetivo: target,
          puntero: i,
          comparaciones,
          resultado: 'buscando',
        },
        marcadores: [marker],
      });

      if (isMatch) {
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'final',
          indicesActivos: [i],
          estadoArray: [...array],
          lineaPseudocodigo: 3,
          contexto: {
            objetivo: target,
            puntero: i,
            comparaciones,
            resultado: 'encontrado',
            indiceEncontrado: i,
          },
          marcadores: [
            {
              index: i,
              label: `i=${i} (Encontrado)`,
              role: 'final',
              color: '#7ED321',
            },
          ],
        });
        return steps;
      }
    }

    // Elemento no encontrado
    steps.push({
      numeroPaso: step++,
      tipoOperacion: 'final',
      indicesActivos: [],
      estadoArray: [...array],
      lineaPseudocodigo: 4,
      contexto: {
        objetivo: target,
        comparaciones,
        resultado: 'noEncontrado',
      },
      marcadores: [],
    });

    return steps;
  },
};
