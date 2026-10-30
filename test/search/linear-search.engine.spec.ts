import { LinearSearch } from '../../src/simulations/engines/search/linear-search.engine';

describe('LinearSearch Engine', () => {
  const dataset = [10, 25, 40, 55, 70, 85, 99];

  describe('Metadatos', () => {
    it('debe tener nombre, descripcion y complejidades correctas', () => {
      expect(LinearSearch.meta.nombre).toBe('Linear Search');
      expect(LinearSearch.meta.categoria).toBe('Busqueda');
      expect(LinearSearch.meta.complejidadTiempo).toBe('O(n)');
      expect(LinearSearch.meta.complejidadEspacio).toBe('O(1)');
    });
  });

  describe('Casos de éxito (elemento encontrado)', () => {
    it('debe encontrar el elemento al inicio (índice 0)', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 10 });
      expect(steps.length).toBeGreaterThan(0);

      const lastStep = steps[steps.length - 1];
      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([0]);
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(0);
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe encontrar el elemento en el centro', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 55 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([3]);
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(3);
      expect(lastStep.contexto?.comparaciones).toBe(4);
    });

    it('debe encontrar el elemento al final (último índice)', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 99 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([dataset.length - 1]);
      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(dataset.length - 1);
      expect(lastStep.contexto?.comparaciones).toBe(dataset.length);
    });
  });

  describe('Casos de fallo (elemento no encontrado)', () => {
    it('debe reportar noEncontrado si el elemento es menor al mínimo', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 5 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([]);
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.comparaciones).toBe(dataset.length);
    });

    it('debe reportar noEncontrado si el elemento es mayor al máximo', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 150 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([]);
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.comparaciones).toBe(dataset.length);
    });

    it('debe reportar noEncontrado si el elemento está ausente en el medio', () => {
      const steps = LinearSearch.execute(dataset, { objetivo: 45 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.tipoOperacion).toBe('final');
      expect(lastStep.indicesActivos).toEqual([]);
      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.comparaciones).toBe(dataset.length);
    });
  });

  describe('Casos borde', () => {
    it('debe manejar arreglos vacíos correctamente', () => {
      const steps = LinearSearch.execute([], { objetivo: 10 });
      expect(steps.length).toBe(1);
      expect(steps[0].tipoOperacion).toBe('final');
      expect(steps[0].contexto?.resultado).toBe('noEncontrado');
      expect(steps[0].contexto?.comparaciones).toBe(0);
    });

    it('debe manejar arreglo con un solo elemento (éxito)', () => {
      const steps = LinearSearch.execute([42], { objetivo: 42 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(0);
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe manejar arreglo con un solo elemento (fallo)', () => {
      const steps = LinearSearch.execute([42], { objetivo: 99 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('noEncontrado');
      expect(lastStep.contexto?.comparaciones).toBe(1);
    });

    it('debe encontrar la primera ocurrencia en arreglos con elementos duplicados', () => {
      const dupes = [20, 50, 50, 50, 80];
      const steps = LinearSearch.execute(dupes, { objetivo: 50 });
      const lastStep = steps[steps.length - 1];

      expect(lastStep.contexto?.resultado).toBe('encontrado');
      expect(lastStep.contexto?.indiceEncontrado).toBe(1);
      expect(lastStep.contexto?.comparaciones).toBe(2);
    });

    it('debe funcionar con objetivo por defecto (fallback retrocompatible si no se pasa options)', () => {
      const steps = LinearSearch.execute([10, 20, 30]);
      expect(steps.length).toBeGreaterThan(0);
      const lastStep = steps[steps.length - 1];
      expect(lastStep.contexto?.resultado).toBe('encontrado');
    });

    it('no debe mutar el arreglo original de entrada', () => {
      const original = [15, 3, 9, 2];
      const clone = [...original];
      LinearSearch.execute(original, { objetivo: 9 });
      expect(original).toEqual(clone);
    });
  });
});
