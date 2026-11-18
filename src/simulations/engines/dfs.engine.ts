import {
  AlgorithmDefinition,
  GrafoData,
  PasoGrafo,
  SimulationInput,
} from './engine.interface';

const DEFAULT_GRAFO: GrafoData = {
  nodos: ['A', 'B', 'C', 'D', 'E', 'F'],
  aristas: [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['B', 'E'],
    ['C', 'F'],
  ],
  dirigido: false,
};

export const DfsEngine: AlgorithmDefinition = {
  meta: {
    nombre: 'Depth-First Search',
    descripcion: 'Recorrido en profundidad usando una pila LIFO explícita.',
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

    const pila: string[] = [nodoInicio];
    const visitados: string[] = [];
    const visitedSet = new Set<string>();

    // Paso inicial de apilar raíz
    steps.push({
      numeroPaso: stepCount++,
      tipoOperacion: 'apilar',
      tipoEstructura: 'grafo',
      nodoActual: nodoInicio,
      visitados: [...visitados],
      frontera: [...pila],
      lineaPseudocodigo: 1,
    });

    while (pila.length > 0) {
      const u = pila.pop();

      // Desapilar
      steps.push({
        numeroPaso: stepCount++,
        tipoOperacion: 'desapilar',
        tipoEstructura: 'grafo',
        nodoActual: u,
        visitados: [...visitados],
        frontera: [...pila],
        lineaPseudocodigo: 3,
      });

      if (!visitedSet.has(u)) {
        visitedSet.add(u);
        visitados.push(u);

        // Visitar nodo
        steps.push({
          numeroPaso: stepCount++,
          tipoOperacion: 'visita',
          tipoEstructura: 'grafo',
          nodoActual: u,
          visitados: [...visitados],
          frontera: [...pila],
          lineaPseudocodigo: 4,
        });

        // Al apilar en orden descendente, los menores salen primero de la pila LIFO
        const neighbors = getNeighbors(u);
        const unvisitedNeighbors = neighbors
          .filter((v) => !visitedSet.has(v))
          .sort((a, b) =>
            b.localeCompare(a, undefined, {
              numeric: true,
              sensitivity: 'base',
            }),
          );

        for (const v of unvisitedNeighbors) {
          pila.push(v);
          steps.push({
            numeroPaso: stepCount++,
            tipoOperacion: 'apilar',
            tipoEstructura: 'grafo',
            nodoActual: u,
            visitados: [...visitados],
            frontera: [...pila],
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
