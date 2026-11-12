import { BinarySearch } from '../../src/simulations/engines/search/binary-search.engine';

describe('BinarySearch Engine', () => {
  const sortedDataset = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  describe('Metadatos', () => {
    it('debe tener nombre, descripcion y complejidades correctas', () => {
      expect(BinarySearch.meta.nombre).toBe('Binary Search');
      expect(BinarySearch.meta.categoria).toBe('Busqueda');
      expect(BinarySearch.meta.complejidadTiempo).toBe('O(log n)');
      expect(BinarySearch.meta.complejidadEspacio).toBe('O(1)');
    });
  });

  describe('Casos de éxito (elemento encontrado)', () => {
    it('debe encontrar el elemento al inicio (primer elemento)', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 10 });
      expect(steps.length).toBeGreaterThan(0);

      const lastStep = steps[steps.length - 1];
      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(0);
      expect(lastStep.indicesActivos).toEqual([0]);

      // Verificar que el marcador final esté presente
      const foundMarker = lastStep.marcadores?.find(
        (m) => m.role === 'final' && m.index === 0,
      );
      expect(foundMarker).toBeDefined();
    });

    it('debe encontrar el elemento en el centro (primera evaluación de mid)', () => {
      // sortedDataset tiene 9 elementos (índices 0..8). El mid inicial es Math.floor(8/2) = 4 (valor 50)
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 50 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(4);
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe encontrar el elemento al final (último elemento)', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 90 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(sortedDataset.length - 1);
    });

    it('debe incluir marcadores L, R, M durante la exploración', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 20 });
      const firstCompareStep = steps.find(
        (s) => s.tipoOperacion === 'comparacion',
      );
      expect(firstCompareStep).toBeDefined();

      const markers = firstCompareStep?.marcadores ?? [];
      const hasL = markers.some((m) => m.label.includes('L'));
      const hasR = markers.some((m) => m.label.includes('R'));
      const hasM = markers.some((m) => m.label.includes('M'));

      expect(hasL).toBe(true);
      expect(hasR).toBe(true);
      expect(hasM).toBe(true);
    });

    it('debe descartar y marcar con role descartado los elementos fuera de rango', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 80 });
      // En pasos avanzados, los elementos de la mitad izquierda deben estar descartados
      const laterStep = steps.find(
        (s) =>
          s.marcadores && s.marcadores.some((m) => m.role === 'descartado'),
      );
      expect(laterStep).toBeDefined();
      const discardedMarkers = laterStep?.marcadores?.filter(
        (m) => m.role === 'descartado',
      );
      expect(discardedMarkers?.length).toBeGreaterThan(0);
    });
  });

  describe('Casos de fallo (elemento no encontrado)', () => {
    it('debe reportar noEncontrado si el elemento es menor al mínimo', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 1 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([]);
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.left).toBeGreaterThan(
        lastStep.contexto?.right ?? 0,
      );
    });

    it('debe reportar noEncontrado si el elemento es mayor al máximo', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 999 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.left).toBeGreaterThan(
        lastStep.contexto?.right ?? 0,
      );
    });

    it('debe reportar noEncontrado si el elemento está ausente en el medio', () => {
      const steps = BinarySearch.execute(sortedDataset, { objetivo: 35 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.left).toBeGreaterThan(
        lastStep.contexto?.right ?? 0,
      );
    });
  });

  describe('Casos borde', () => {
    it('debe manejar arreglos vacíos', () => {
      const steps = BinarySearch.execute([], { objetivo: 10 });
      expect(steps.length).toBe(1);
      expect(steps[0].tipoOperacion).toBe('final');
      expect(steps[0].contexto?.resultado).toBe('noEncontrado');
      expect(steps[0].contexto?.comparaciones).toBe(0);
    });

    it('debe manejar arreglo con un solo elemento (éxito)', () => {
      const steps = BinarySearch.execute([50], { objetivo: 50 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(0);
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe manejar arreglo con un solo elemento (fallo)', () => {
      const steps = BinarySearch.execute([50], { objetivo: 25 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe auto-ordenar arreglos desordenados (requisito acordado de UX)', () => {
      const unsorted = [90, 10, 50, 30, 70];
      const steps = BinarySearch.execute(unsorted, { objetivo: 70 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('encontrado');
      // Arreglo ordenado es [10, 30, 50, 70, 90], 70 está en el índice 3
      expect(lastStep.contexto?.indiceEncontrado).toBe(3);
      expect(lastStep.estadoArray).toEqual([10, 30, 50, 70, 90]);
    });

    it('debe manejar elementos duplicados', () => {
      const dupes = [10, 20, 20, 20, 30];
      const steps = BinarySearch.execute(dupes, { objetivo: 20 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(dupes[lastStep.contexto?.indiceEncontrado ?? -1]).toBe(20);
    });

    it('no debe mutar el arreglo original de entrada', () => {
      const original = [80, 20, 50];
      const clone = [...original];
      BinarySearch.execute(original, { objetivo: 20 });
      expect(original).toEqual(clone);
    });

    it('debe respetar la cota de comparaciones O(log n)', () => {
      const largeArray = Array.from({ length: 32 }, (_, i) => i * 2);
      const steps = BinarySearch.execute(largeArray, { objetivo: 999 }); // Peor caso: no existe
      const lastStep = steps[steps.length - 1];

      // log2(32) = 5. El número de comparaciones no debe superar ceil(log2(n)) + 1
      expect(lastStep.contexto?.comparaciones).toBeLessThanOrEqual(6);
    });
  });
});
