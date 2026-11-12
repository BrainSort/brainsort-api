import {
  AlgorithmDefinition,
  EngineOptions,
  SimulationMarker,
  SimulationStep,
} from '../engine.interface';

/**
 * Motor modular de Búsqueda Binaria.
 * Auto-ordena los datos si es necesario (según decisión de producto).
 * Genera traza paso a paso con punteros left, right, mid y marcadores descartados.
 * Complejidad: Tiempo O(log n), Espacio O(1).
 */
export const BinarySearch: AlgorithmDefinition = {
  meta: {
    nombre: 'Binary Search',
    descripcion: 'Descarta mitades de un arreglo ordenado calculando el punto medio.',
    complejidadTiempo: 'O(log n)',
    complejidadEspacio: 'O(1)',
    categoria: 'Busqueda',
  },
  execute(data: number[], options?: EngineOptions): SimulationStep[] {
    // Mantener inmutable el input original y ordenar de forma ascendente
    const array = [...data].sort((a, b) => a - b);
    const steps: SimulationStep[] = [];

    // Caso borde: arreglo vacío
    if (array.length === 0) {
      steps.push({
        numeroPaso: 1,
        tipoOperacion: 'final',
        indicesActivos: [],
        estadoArray: [],
        lineaPseudocodigo: 6,
        contexto: {
          objetivo: options?.objetivo,
          comparaciones: 0,
          resultado: 'noEncontrado',
        },
        marcadores: [],
      });
      return steps;
    }

    // Objetivo definido o fallback determinista
    const target =
      options?.objetivo !== undefined
        ? options.objetivo
        : (array[Math.floor(array.length * 0.65)] ?? array[0]);

    let step = 1;
    let low = 0;
    let high = array.length - 1;
    let comparaciones = 0;

    const buildBinaryMarkers = (
      l: number,
      h: number,
      m?: number,
      foundIdx?: number,
    ): SimulationMarker[] => {
      const markers: SimulationMarker[] = [];

      // 1. Marcar elementos descartados fuera de [l, h]
      for (let i = 0; i < array.length; i++) {
        if (i < l || i > h) {
          markers.push({
            index: i,
            label: '',
            role: 'descartado',
            color: '#1A2333',
          });
        }
      }

      // 2. Si se encontró el objetivo
      if (foundIdx !== undefined) {
        markers.push({
          index: foundIdx,
          label: `mid=${foundIdx} (Encontrado)`,
          role: 'final',
          color: '#7ED321',
        });
        return markers;
      }

      // 3. Punteros activos L, R, M
      const labelMap: Record<number, string[]> = {};
      if (l >= 0 && l < array.length) {
        labelMap[l] = ['L'];
      }
      if (h >= 0 && h < array.length) {
        labelMap[h] = labelMap[h] ? [...labelMap[h], 'R'] : ['R'];
      }
      if (m !== undefined && m >= 0 && m < array.length) {
        labelMap[m] = labelMap[m] ? [...labelMap[m], 'M'] : ['M'];
      }

      for (const [idxStr, labels] of Object.entries(labelMap)) {
        const idx = Number(idxStr);
        const hasMid = labels.includes('M');
        markers.push({
          index: idx,
          label: labels.join('/'),
          role: hasMid ? 'activo' : 'rangoActual',
          color: hasMid ? '#F5A623' : '#00D4FF',
        });
      }

      return markers;
    };

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      comparaciones++;

      // Paso 1: cálculo de mid y comparación
      steps.push({
        numeroPaso: step++,
        tipoOperacion: 'comparacion',
        indicesActivos: [low, mid, high].filter((idx) => idx >= 0 && idx < array.length),
        estadoArray: [...array],
        lineaPseudocodigo: 3,
        contexto: {
          objetivo: target,
          left: low,
          right: high,
          mid,
          comparaciones,
          resultado: 'buscando',
        },
        marcadores: buildBinaryMarkers(low, high, mid),
      });

      if (array[mid] === target) {
        // Encontrado
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'final',
          indicesActivos: [mid],
          estadoArray: [...array],
          lineaPseudocodigo: 4,
          contexto: {
            objetivo: target,
            left: low,
            right: high,
            mid,
            comparaciones,
            resultado: 'encontrado',
            indiceEncontrado: mid,
          },
          marcadores: buildBinaryMarkers(low, high, mid, mid),
        });
        return steps;
      }

      if (array[mid] < target) {
        // Buscar en la mitad derecha: low = mid + 1
        low = mid + 1;
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'insercion',
          indicesActivos: low <= high ? [low, high] : [],
          estadoArray: [...array],
          lineaPseudocodigo: 5,
          contexto: {
            objetivo: target,
            left: low,
            right: high,
            mid,
            comparaciones,
            resultado: 'buscando',
          },
          marcadores: buildBinaryMarkers(low, high),
        });
      } else {
        // Buscar en la mitad izquierda: high = mid - 1
        high = mid - 1;
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'insercion',
          indicesActivos: low <= high ? [low, high] : [],
          estadoArray: [...array],
          lineaPseudocodigo: 6,
          contexto: {
            objetivo: target,
            left: low,
            right: high,
            mid,
            comparaciones,
            resultado: 'buscando',
          },
          marcadores: buildBinaryMarkers(low, high),
        });
      }
    }

    // No encontrado (left > right)
    steps.push({
      numeroPaso: step++,
      tipoOperacion: 'final',
      indicesActivos: [],
      estadoArray: [...array],
      lineaPseudocodigo: 6,
      contexto: {
        objetivo: target,
        left: low,
        right: high,
        comparaciones,
        resultado: 'noEncontrado',
      },
      marcadores: buildBinaryMarkers(low, high),
    });

    return steps;
  },
};
