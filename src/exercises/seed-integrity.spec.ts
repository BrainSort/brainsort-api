import { getExerciseSeeds, getSeedAlgorithmNames } from '../../prisma/seed';

describe('Seed Integrity — Ejercicios Gamificados', () => {
  const seeds = getExerciseSeeds();
  const algorithmNames = getSeedAlgorithmNames();

  it('cada algoritmo activo debe tener al menos 3 ejercicios variados', () => {
    const counts = new Map<string, number>();
    for (const algo of algorithmNames) {
      counts.set(algo, 0);
    }

    for (const seed of seeds) {
      counts.set(seed.algoritmo, (counts.get(seed.algoritmo) ?? 0) + 1);
    }

    for (const algo of algorithmNames) {
      expect({
        algoritmo: algo,
        cantidad: counts.get(algo) ?? 0,
      }).toEqual({
        algoritmo: algo,
        cantidad: expect.any(Number),
      });
      expect(counts.get(algo) ?? 0).toBeGreaterThanOrEqual(3);
    }
  });

  it('todo OrdenarBarras por intercambio debe ser 100% resoluble (mismo multiconjunto inicial/objetivo)', () => {
    const swapExercises = seeds.filter((s) => {
      if (s.tipo !== 'OrdenarBarras') return false;
      const contenido = (s.contenido ?? {}) as Record<string, unknown>;
      return contenido.modoSeleccion !== true;
    });

    expect(swapExercises.length).toBeGreaterThan(0);

    for (const ex of swapExercises) {
      const contenido = ex.contenido as {
        inicial: number[];
        objetivo: number[];
      };
      expect(Array.isArray(contenido.inicial)).toBe(true);
      expect(Array.isArray(contenido.objetivo)).toBe(true);
      expect(contenido.inicial.length).toBe(contenido.objetivo.length);

      const sortedInicial = [...contenido.inicial].sort((a, b) => a - b);
      const sortedObjetivo = [...contenido.objetivo].sort((a, b) => a - b);
      expect(sortedInicial).toEqual(sortedObjetivo);

      const parsedAnswer = JSON.parse(ex.respuestaCorrecta) as number[];
      expect(parsedAnswer).toEqual(contenido.objetivo);
    }
  });

  it('todo OrdenarBarras con modoSeleccion: true debe tener un índice string válido en [0..inicial.length-1]', () => {
    const selectionExercises = seeds.filter((s) => {
      if (s.tipo !== 'OrdenarBarras') return false;
      const contenido = (s.contenido ?? {}) as Record<string, unknown>;
      return contenido.modoSeleccion === true;
    });

    expect(selectionExercises.length).toBeGreaterThan(0);

    for (const ex of selectionExercises) {
      const contenido = ex.contenido as { inicial: number[] };
      expect(Array.isArray(contenido.inicial)).toBe(true);
      expect(contenido.inicial.length).toBeGreaterThan(0);

      const idx = Number(ex.respuestaCorrecta);
      expect(Number.isInteger(idx)).toBe(true);
      expect(String(idx)).toBe(ex.respuestaCorrecta);
      expect(idx).toBeGreaterThanOrEqual(0);
      expect(idx).toBeLessThan(contenido.inicial.length);
    }
  });

  it('todo CompletarPseudocodigo debe incluir respuestaCorrecta dentro de opciones', () => {
    const pseudoExercises = seeds.filter(
      (s) => s.tipo === 'CompletarPseudocodigo',
    );

    expect(pseudoExercises.length).toBeGreaterThan(0);

    for (const ex of pseudoExercises) {
      const opciones = ex.opciones as string[] | undefined;
      expect(Array.isArray(opciones)).toBe(true);
      expect(opciones).toContain(ex.respuestaCorrecta);
    }
  });

  it('todo SecuenciaGrafos debe tener respuestaCorrecta como JSON array de nodos existentes en grafo.nodos', () => {
    const graphExercises = seeds.filter((s) => s.tipo === 'SecuenciaGrafos');

    expect(graphExercises.length).toBeGreaterThan(0);

    for (const ex of graphExercises) {
      const contenido = ex.contenido as {
        grafo: { nodos: string[] };
        nodoInicio?: string;
      };
      expect(Array.isArray(contenido?.grafo?.nodos)).toBe(true);

      const parsed = JSON.parse(ex.respuestaCorrecta) as string[];
      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed.length).toBeGreaterThan(0);

      for (const node of parsed) {
        expect(contenido.grafo.nodos).toContain(node);
      }

      if (contenido.nodoInicio) {
        expect(contenido.grafo.nodos).toContain(contenido.nodoInicio);
      }
    }
  });
});
