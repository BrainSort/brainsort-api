import {
  AlgorithmDefinition,
  GrafoData,
  PasoGrafo,
  SimulationInput,
} from './engine.interface';

const DEFAULT_WEIGHTED_GRAFO: GrafoData = {
  nodos: ['A', 'B', 'C', 'D', 'E'],
  aristas: [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'C'],
    ['B', 'D'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E'],
  ],
  dirigido: false,
  pesos: {
    'A-B': 4,
    'A,B': 4,
    'B-A': 4,
    'B,A': 4,
    'A-C': 2,
    'A,C': 2,
    'C-A': 2,
    'C,A': 2,
    'B-C': 1,
    'B,C': 1,
    'C-B': 1,
    'C,B': 1,
    'B-D': 5,
    'B,D': 5,
    'D-B': 5,
    'D,B': 5,
    'C-D': 8,
    'C,D': 8,
    'D-C': 8,
    'D,C': 8,
    'C-E': 10,
    'C,E': 10,
    'E-C': 10,
    'E,C': 10,
    'D-E': 2,
    'D,E': 2,
    'E-D': 2,
    'E,D': 2,
  },
  aristasPonderadas: [
    ['A', 'B', 4],
    ['A', 'C', 2],
    ['B', 'C', 1],
    ['B', 'D', 5],
    ['C', 'D', 8],
    ['C', 'E', 10],
    ['D', 'E', 2],
  ],
};

interface PQItem {
  node: string;
  dist: number;
}

export const DijkstraEngine: AlgorithmDefinition = {
  meta: {
    nombre: 'Dijkstra',
    descripcion:
      'Calcula el camino mínimo desde un nodo origen a todos los demás en grafos con pesos no negativos.',
    complejidadTiempo: 'O((V + E) log V)',
    complejidadEspacio: 'O(V)',
    categoria: 'Grafos',
    tipoEstructura: 'grafo',
  },
  execute(input: SimulationInput | number[]): PasoGrafo[] {
    const isArrayInput = Array.isArray(input);
    const grafo: GrafoData =
      !isArrayInput && input.grafo ? input.grafo : DEFAULT_WEIGHTED_GRAFO;
    const nodoInicio: string =
      !isArrayInput && input.nodoInicio
        ? input.nodoInicio
        : (grafo.nodos[0] ?? 'A');

    const steps: PasoGrafo[] = [];
    let stepCount = 1;

    const getWeight = (u: string, v: string): number => {
      if (grafo.pesos) {
        if (grafo.pesos[`${u}-${v}`] !== undefined)
          return grafo.pesos[`${u}-${v}`];
        if (grafo.pesos[`${u},${v}`] !== undefined)
          return grafo.pesos[`${u},${v}`];
        if (!grafo.dirigido) {
          if (grafo.pesos[`${v}-${u}`] !== undefined)
            return grafo.pesos[`${v}-${u}`];
          if (grafo.pesos[`${v},${u}`] !== undefined)
            return grafo.pesos[`${v},${u}`];
        }
      }
      if (grafo.aristasPonderadas) {
        const found = grafo.aristasPonderadas.find(
          ([from, to]) =>
            (from === u && to === v) ||
            (!grafo.dirigido && from === v && to === u),
        );
        if (found !== undefined) return found[2];
      }
      return 1;
    };

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

    const distancias: Record<string, number> = {};
    const caminoPrevio: Record<string, string | null> = {};
    for (const node of grafo.nodos) {
      distancias[node] = node === nodoInicio ? 0 : Infinity;
      caminoPrevio[node] = null;
    }

    const pq: PQItem[] = [{ node: nodoInicio, dist: 0 }];
    const visitados: string[] = [];

    const getFrontera = (): string[] => pq.map((item) => item.node);

    // Paso inicial
    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'idle',
      tipoEstructura: 'grafo',
      nodoActual: nodoInicio,
      visitados: [...visitados],
      frontera: getFrontera(),
      distancias: { ...distancias },
      caminoPrevio: { ...caminoPrevio },
      lineaPseudocodigo: 2,
    });

    while (pq.length > 0) {
      pq.sort((a, b) => {
        if (a.dist !== b.dist) return a.dist - b.dist;
        return a.node.localeCompare(b.node, undefined, {
          numeric: true,
          sensitivity: 'base',
        });
      });

      const currentItem = pq.shift();
      const u = currentItem.node;

      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'desencolar',
        tipoEstructura: 'grafo',
        nodoActual: u,
        visitados: [...visitados],
        frontera: getFrontera(),
        distancias: { ...distancias },
        caminoPrevio: { ...caminoPrevio },
        lineaPseudocodigo: 5,
      });

      if (visitados.includes(u)) {
        continue;
      }

      visitados.push(u);
      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'visita',
        tipoEstructura: 'grafo',
        nodoActual: u,
        visitados: [...visitados],
        frontera: getFrontera(),
        distancias: { ...distancias },
        caminoPrevio: { ...caminoPrevio },
        lineaPseudocodigo: 6,
      });

      const neighbors = getNeighbors(u);
      for (const v of neighbors) {
        if (visitados.includes(v)) {
          continue;
        }

        const pesoArista = getWeight(u, v);
        const nuevaDist = distancias[u] + pesoArista;

        steps.push({
          numeroPaso: stepCount++,
          tipoOperacion: 'comparacion',
          tipoEstructura: 'grafo',
          nodoActual: u,
          nodoEvaluado: v,
          aristaActiva: [u, v],
          visitados: [...visitados],
          frontera: getFrontera(),
          distancias: { ...distancias },
          caminoPrevio: { ...caminoPrevio },
          lineaPseudocodigo: 8,
        });

        if (nuevaDist < distancias[v]) {
          distancias[v] = nuevaDist;
          caminoPrevio[v] = u;
          pq.push({ node: v, dist: nuevaDist });

          steps.push({
            numeroPaso: stepCount++,
            tipoOperacion: 'relajacion',
            tipoEstructura: 'grafo',
            nodoActual: u,
            nodoEvaluado: v,
            aristaActiva: [u, v],
            relajacion: true,
            visitados: [...visitados],
            frontera: getFrontera(),
            distancias: { ...distancias },
            caminoPrevio: { ...caminoPrevio },
            lineaPseudocodigo: 9,
          });
        }
      }
    }

    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'final',
      tipoEstructura: 'grafo',
      nodoActual: null,
      visitados: [...visitados],
      frontera: [],
      distancias: { ...distancias },
      caminoPrevio: { ...caminoPrevio },
      lineaPseudocodigo: 10,
    });

    return steps.map((s) => ({ ...s, grafo }));
  },
};
