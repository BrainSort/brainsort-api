import {
  AlgorithmDefinition,
  GrafoData,
  PasoGrafo,
  SimulationInput,
} from './engine.interface';

const DEFAULT_GRAFO: GrafoData = {
  nodos: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  aristas: [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
    ['C', 'G'],
  ],
  dirigido: false,
};

export const BfsEngine: AlgorithmDefinition = {
  meta: {
    nombre: 'Breadth-First Search',
    descripcion: 'Recorrido en anchura por niveles usando una cola FIFO.',
    complejidadTiempo: 'O(V + E)',
    complejidadEspacio: 'O(V)',
    categoria: 'Grafos',
    tipoEstructura: 'grafo',
  },
  execute(input: SimulationInput | number[]): PasoGrafo[] {
    const isArrayInput = Array.isArray(input);
    const grafo: GrafoData =
      !isArrayInput && input.grafo ? input.grafo : DEFAULT_GRAFO;
    const nodoInicio: string =
      !isArrayInput && input.nodoInicio
        ? input.nodoInicio
        : (grafo.nodos[0] ?? 'A');

    const steps: PasoGrafo[] = [];
    let stepCount = 1;

    // Regla de determinismo: ordenar vecinos ascendentemente
    const getNeighbors = (node: string): string[] => {
      const neighbors: string[] = [];
      for (const [from, to] of grafo.aristas) {
        if (from === node && !neighbors.includes(to)) {
          neighbors.push(to);
        } else if (
          !grafo.dirigido &&
          to === node &&
          !neighbors.includes(from)
        ) {
          neighbors.push(from);
        }
      }
      return neighbors.sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
      );
    };

    const cola: string[] = [nodoInicio];
    const visitados: string[] = [];
    const enqueued = new Set<string>([nodoInicio]);

    // Paso inicial de encolar raíz
    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'encolar',
      tipoEstructura: 'grafo',
      nodoActual: nodoInicio,
      visitados: [...visitados],
      frontera: [...cola],
      lineaPseudocodigo: 1,
    });

    while (cola.length > 0) {
      const u = cola.shift();

      // Desencolar
      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'desencolar',
        tipoEstructura: 'grafo',
        nodoActual: u,
        visitados: [...visitados],
        frontera: [...cola],
        lineaPseudocodigo: 3,
      });

      // Visitar nodo
      if (!visitados.includes(u)) {
        visitados.push(u);
      }

      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'visita',
        tipoEstructura: 'grafo',
        nodoActual: u,
        visitados: [...visitados],
        frontera: [...cola],
        lineaPseudocodigo: 3,
      });

      // Explorar vecinos
      const neighbors = getNeighbors(u);
      for (const v of neighbors) {
        if (!enqueued.has(v) && !visitados.includes(v)) {
          enqueued.add(v);
          cola.push(v);
          steps.push({
            numeroPaso: stepCount++,
            tipoOperacion: 'encolar',
            tipoEstructura: 'grafo',
            nodoActual: u,
            visitados: [...visitados],
            frontera: [...cola],
            aristaActiva: [u, v],
            lineaPseudocodigo: 6,
          });
        }
      }
    }

    // Paso final
    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'final',
      tipoEstructura: 'grafo',
      nodoActual: null,
      visitados: [...visitados],
      frontera: [],
      lineaPseudocodigo: 6,
    });

    return steps.map((s) => ({ ...s, grafo }));
  },
};
