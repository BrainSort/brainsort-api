import {
  BinarySearch,
  LinearSearch,
} from '../../../../src/simulations/engines/search';
import { SimulationStep } from '../../../../src/simulations/engines/engine.interface';

/**
 * Valida la consistencia estructural e inmutabilidad de una traza de pasos.
 */
function assertConsistentStepTrace(
  steps: SimulationStep[],
  expectedArraySnapshot: number[],
): void {
  expect(Array.isArray(steps)).toBe(true);
  expect(steps.length).toBeGreaterThan(0);

  steps.forEach((step, idx) => {
    expect(step.numeroPaso).toBe(idx + 1);
    expect([
      'comparacion',
      'intercambio',
      'insercion',
      'final',
      'idle',
    ]).toContain(step.tipoOperacion);
    expect(Array.isArray(step.indicesActivos)).toBe(true);
    expect(step.estadoArray).toEqual(expectedArraySnapshot);
    expect(step.estadoArray).not.toBe(expectedArraySnapshot);
    expect(typeof step.lineaPseudocodigo).toBe('number');
    expect(step.lineaPseudocodigo).toBeGreaterThanOrEqual(1);
  });

  const finalStep = steps[steps.length - 1];
  expect(finalStep.tipoOperacion).toBe('final');

  // Ningún paso previo al último debe ser de tipo 'final'
  steps.slice(0, -1).forEach((step) => {
    expect(step.tipoOperacion).not.toBe('final');
  });
}

describe('Search Engines Unit Test Suite (LinearSearch & BinarySearch)', () => {
  describe('LinearSearch Engine', () => {
    it('debe exponer metadatos didácticos de complejidad temporal O(n) y espacial O(1)', () => {
      expect(LinearSearch.meta).toEqual({
        nombre: 'Linear Search',
        descripcion: expect.any(String),
        complejidadTiempo: 'O(n)',
        complejidadEspacio: 'O(1)',
        categoria: 'Busqueda',
      });
    });

    describe('Objetivo presente (Casos de éxito)', () => {
      const dataset = [25, 10, 45, 30, 60];

      it('encuentra el objetivo en el primer índice (índice 0)', () => {
        const input = [...dataset];
        const steps = LinearSearch.execute(input, 25);

        assertConsistentStepTrace(steps, dataset);
        expect(input).toEqual(dataset);

        // 1 comparación en i=0 + 1 paso final
        expect(steps).toHaveLength(2);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'comparacion',
          indicesActivos: [0],
          lineaPseudocodigo: 2,
        });
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'final',
          indicesActivos: [0],
          lineaPseudocodigo: 3,
        });
      });

      it('encuentra el objetivo en el índice del medio (índice 2)', () => {
        const input = [...dataset];
        const steps = LinearSearch.execute(input, 45);

        assertConsistentStepTrace(steps, dataset);

        // Comparaciones en i=0, 1, 2 (3 comparaciones) + 1 paso final = 4 pasos
        expect(steps).toHaveLength(4);
        const comparisons = steps.filter(
          (s) => s.tipoOperacion === 'comparacion',
        );
        expect(comparisons.map((s) => s.indicesActivos)).toEqual([
          [0],
          [1],
          [2],
        ]);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          numeroPaso: 4,
          tipoOperacion: 'final',
          indicesActivos: [2],
          lineaPseudocodigo: 3,
        });
      });

      it('encuentra el objetivo en el último índice (índice n - 1)', () => {
        const input = [...dataset];
        const steps = LinearSearch.execute(input, 60);

        assertConsistentStepTrace(steps, dataset);

        // Comparaciones en i=0, 1, 2, 3, 4 (5 comparaciones) + 1 paso final = 6 pasos
        expect(steps).toHaveLength(6);
        const comparisons = steps.filter(
          (s) => s.tipoOperacion === 'comparacion',
        );
        expect(comparisons.map((s) => s.indicesActivos)).toEqual([
          [0],
          [1],
          [2],
          [3],
          [4],
        ]);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          numeroPaso: 6,
          tipoOperacion: 'final',
          indicesActivos: [4],
          lineaPseudocodigo: 3,
        });
      });
    });

    describe('Objetivo ausente (Casos de fallo)', () => {
      const dataset = [10, 20, 30, 40, 50];

      it('descarta correctamente un objetivo menor que el mínimo', () => {
        const steps = LinearSearch.execute(dataset, 5);

        assertConsistentStepTrace(steps, dataset);
        // Evalúa los 5 elementos y termina sin éxito en línea 4
        expect(steps).toHaveLength(dataset.length + 1);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          numeroPaso: 6,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 4,
        });
      });

      it('descarta correctamente un objetivo mayor que el máximo', () => {
        const steps = LinearSearch.execute(dataset, 95);

        assertConsistentStepTrace(steps, dataset);
        expect(steps).toHaveLength(dataset.length + 1);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          numeroPaso: 6,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 4,
        });
      });

      it('descarta correctamente un valor intermedio faltante', () => {
        const steps = LinearSearch.execute(dataset, 35);

        assertConsistentStepTrace(steps, dataset);
        expect(steps).toHaveLength(dataset.length + 1);

        const comparisons = steps.filter(
          (s) => s.tipoOperacion === 'comparacion',
        );
        expect(comparisons).toHaveLength(dataset.length);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          numeroPaso: 6,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 4,
        });
      });
    });

    describe('Casos límite (Edge Cases)', () => {
      it('maneja un arreglo vacío sin errores ni bloqueos', () => {
        const empty: number[] = [];
        const steps = LinearSearch.execute(empty, 10);

        assertConsistentStepTrace(steps, []);
        expect(steps).toHaveLength(1);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'final',
          indicesActivos: [],
          estadoArray: [],
          lineaPseudocodigo: 4,
        });
      });

      it('maneja un arreglo de un solo elemento cuando el objetivo está presente', () => {
        const single = [42];
        const steps = LinearSearch.execute(single, 42);

        assertConsistentStepTrace(steps, [42]);
        expect(steps).toHaveLength(2);
        expect(steps[0].indicesActivos).toEqual([0]);
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'final',
          indicesActivos: [0],
          lineaPseudocodigo: 3,
        });
      });

      it('maneja un arreglo de un solo elemento cuando el objetivo está ausente', () => {
        const single = [42];
        const steps = LinearSearch.execute(single, 99);

        assertConsistentStepTrace(steps, [42]);
        expect(steps).toHaveLength(2);
        expect(steps[0].indicesActivos).toEqual([0]);
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 4,
        });
      });

      it('detiene la búsqueda en la primera aparición cuando hay elementos repetidos', () => {
        const repeated = [10, 20, 20, 20, 30];
        const steps = LinearSearch.execute(repeated, 20);

        assertConsistentStepTrace(steps, repeated);
        // Compara índice 0 (10) e índice 1 (20 -> encontrado) + paso final = 3 pasos
        expect(steps).toHaveLength(3);
        expect(steps[steps.length - 1]).toMatchObject({
          numeroPaso: 3,
          tipoOperacion: 'final',
          indicesActivos: [1],
          lineaPseudocodigo: 3,
        });
      });

      it('recorre todos los elementos si la lista tiene valores idénticos pero el objetivo no está', () => {
        const allSame = [7, 7, 7, 7];
        const steps = LinearSearch.execute(allSame, 9);

        assertConsistentStepTrace(steps, allSame);
        expect(steps).toHaveLength(5);
        expect(steps[steps.length - 1]).toMatchObject({
          numeroPaso: 5,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 4,
        });
      });

      it('usa un objetivo por defecto consistente cuando no se especifica target', () => {
        const dataset = [10, 20, 30, 40, 50];
        const steps = LinearSearch.execute(dataset);

        assertConsistentStepTrace(steps, dataset);
        const finalStep = steps[steps.length - 1];
        expect(finalStep.indicesActivos).toEqual([2]);
      });
    });
  });

  describe('BinarySearch Engine', () => {
    it('debe exponer metadatos didácticos de complejidad temporal O(log n) y espacial O(1)', () => {
      expect(BinarySearch.meta).toEqual({
        nombre: 'Binary Search',
        descripcion: expect.any(String),
        complejidadTiempo: 'O(log n)',
        complejidadEspacio: 'O(1)',
        categoria: 'Busqueda',
      });
    });

    describe('Objetivo presente (Casos de éxito)', () => {
      const sortedDataset = [10, 20, 30, 40, 50];

      it('encuentra el objetivo en el primer índice (índice 0)', () => {
        const input = [...sortedDataset];
        const steps = BinarySearch.execute(input, 10);

        assertConsistentStepTrace(steps, sortedDataset);
        expect(input).toEqual(sortedDataset);

        // Iter 1: low=0, mid=2 (30 > 10) -> high=1 (línea 6)
        // Iter 2: low=0, mid=0 (10 === 10) -> encontrado en 0 (línea 4)
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'comparacion',
          indicesActivos: [0, 2, 4],
          lineaPseudocodigo: 3,
        });
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'insercion',
          indicesActivos: [],
          lineaPseudocodigo: 6,
        });
        expect(steps[2]).toMatchObject({
          numeroPaso: 3,
          tipoOperacion: 'comparacion',
          indicesActivos: [0, 0, 1],
          lineaPseudocodigo: 3,
        });
        expect(steps[3]).toMatchObject({
          numeroPaso: 4,
          tipoOperacion: 'final',
          indicesActivos: [0],
          lineaPseudocodigo: 4,
        });
      });

      it('encuentra el objetivo en el índice del medio en la primera comparación (índice 2)', () => {
        const steps = BinarySearch.execute(sortedDataset, 30);

        assertConsistentStepTrace(steps, sortedDataset);
        expect(steps).toHaveLength(2);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'comparacion',
          indicesActivos: [0, 2, 4],
          lineaPseudocodigo: 3,
        });
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'final',
          indicesActivos: [2],
          lineaPseudocodigo: 4,
        });
      });

      it('encuentra el objetivo en el último índice (índice n - 1)', () => {
        const steps = BinarySearch.execute(sortedDataset, 50);

        assertConsistentStepTrace(steps, sortedDataset);

        // Iter 1: low=0, mid=2, high=4 (30 < 50) -> low=3 (línea 5)
        // Iter 2: low=3, mid=3, high=4 (40 < 50) -> low=4 (línea 5)
        // Iter 3: low=4, mid=4, high=4 (50 === 50) -> final en [4] (línea 4)
        const comparisons = steps.filter(
          (s) => s.tipoOperacion === 'comparacion',
        );
        expect(comparisons.map((s) => s.indicesActivos)).toEqual([
          [0, 2, 4],
          [3, 3, 4],
          [4, 4, 4],
        ]);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          tipoOperacion: 'final',
          indicesActivos: [4],
          lineaPseudocodigo: 4,
        });
      });

      it('auto-ordena una copia si el arreglo de entrada está desordenado sin mutar el original', () => {
        const unsorted = [50, 10, 40, 20, 30];
        const steps = BinarySearch.execute(unsorted, 40);

        expect(unsorted).toEqual([50, 10, 40, 20, 30]);
        assertConsistentStepTrace(steps, [10, 20, 30, 40, 50]);

        const finalStep = steps[steps.length - 1];
        expect(finalStep.indicesActivos).toEqual([3]);
        expect(finalStep.estadoArray[3]).toBe(40);
      });
    });

    describe('Objetivo ausente (Casos de fallo)', () => {
      const sortedDataset = [10, 20, 30, 40, 50];

      it('descarta correctamente un objetivo menor que el mínimo (high < low)', () => {
        const steps = BinarySearch.execute(sortedDataset, 5);

        assertConsistentStepTrace(steps, sortedDataset);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 6,
        });
      });

      it('descarta correctamente un objetivo mayor que el máximo (low > high)', () => {
        const steps = BinarySearch.execute(sortedDataset, 95);

        assertConsistentStepTrace(steps, sortedDataset);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 6,
        });
      });

      it('descarta correctamente un valor intermedio faltante tras cruzar límites', () => {
        const steps = BinarySearch.execute(sortedDataset, 25);

        assertConsistentStepTrace(steps, sortedDataset);

        // mid=2 (30 > 25) -> high=1; mid=0 (10 < 25) -> low=1; mid=1 (20 < 25) -> low=2 > high=1
        const comparisons = steps.filter(
          (s) => s.tipoOperacion === 'comparacion',
        );
        expect(comparisons.map((s) => s.indicesActivos)).toEqual([
          [0, 2, 4],
          [0, 0, 1],
          [1, 1, 1],
        ]);

        const finalStep = steps[steps.length - 1];
        expect(finalStep).toMatchObject({
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 6,
        });
      });
    });

    describe('Casos límite (Edge Cases)', () => {
      it('maneja un arreglo vacío sin entrar al ciclo ni lanzar errores', () => {
        const empty: number[] = [];
        const steps = BinarySearch.execute(empty, 10);

        assertConsistentStepTrace(steps, []);
        expect(steps).toHaveLength(1);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'final',
          indicesActivos: [],
          estadoArray: [],
          lineaPseudocodigo: 6,
        });
      });

      it('maneja un arreglo de un solo elemento cuando el objetivo está presente', () => {
        const single = [42];
        const steps = BinarySearch.execute(single, 42);

        assertConsistentStepTrace(steps, [42]);
        expect(steps).toHaveLength(2);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'comparacion',
          indicesActivos: [0, 0, 0],
          lineaPseudocodigo: 3,
        });
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'final',
          indicesActivos: [0],
          lineaPseudocodigo: 4,
        });
      });

      it('maneja un arreglo de un solo elemento cuando el objetivo está ausente', () => {
        const single = [42];
        const steps = BinarySearch.execute(single, 99);

        assertConsistentStepTrace(steps, [42]);
        expect(steps).toHaveLength(3);
        expect(steps[0]).toMatchObject({
          numeroPaso: 1,
          tipoOperacion: 'comparacion',
          indicesActivos: [0, 0, 0],
          lineaPseudocodigo: 3,
        });
        expect(steps[1]).toMatchObject({
          numeroPaso: 2,
          tipoOperacion: 'insercion',
          indicesActivos: [],
          lineaPseudocodigo: 5,
        });
        expect(steps[2]).toMatchObject({
          numeroPaso: 3,
          tipoOperacion: 'final',
          indicesActivos: [],
          lineaPseudocodigo: 6,
        });
      });

      it('localiza un índice válido cuando existen elementos repetidos en el arreglo', () => {
        const repeated = [10, 20, 20, 20, 30];
        const steps = BinarySearch.execute(repeated, 20);

        assertConsistentStepTrace(steps, repeated);
        const finalStep = steps[steps.length - 1];
        expect(finalStep.indicesActivos).toHaveLength(1);
        const foundIndex = finalStep.indicesActivos[0];
        expect(repeated[foundIndex]).toBe(20);
      });

      it('termina correctamente sin ciclo infinito cuando todos los elementos son repetidos y el objetivo no existe', () => {
        const allSame = [7, 7, 7, 7, 7];
        const steps = BinarySearch.execute(allSame, 3);

        assertConsistentStepTrace(steps, allSame);
        const finalStep = steps[steps.length - 1];
        expect(finalStep.indicesActivos).toEqual([]);
        expect(finalStep.lineaPseudocodigo).toBe(6);
      });

      it('usa un objetivo por defecto consistente cuando no se especifica target', () => {
        const dataset = [10, 20, 30, 40, 50];
        const steps = BinarySearch.execute(dataset);

        assertConsistentStepTrace(steps, dataset);
        const finalStep = steps[steps.length - 1];
        expect(finalStep.indicesActivos).toHaveLength(1);
      });
    });
  });
});
