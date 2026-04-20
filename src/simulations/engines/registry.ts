import { AlgorithmDefinition, SimulationStep } from './engine.interface';
import { BubbleSort } from './bubble-sort.engine';
import { SelectionSort } from './selection-sort.engine';
import { InsertionSort } from './insertion-sort.engine';
import { NotFoundException } from '@nestjs/common';

const ENGINES: Record<string, AlgorithmDefinition> = {
  'Bubble Sort': BubbleSort,
  'Selection Sort': SelectionSort,
  'Insertion Sort': InsertionSort,
};

export function getEngine(nombre: string): AlgorithmDefinition {
  const engine = ENGINES[nombre];
  if (!engine) {
    throw new NotFoundException(`Engine "${nombre}" no registrado`);
  }
  return engine;
}

/**
 * Ejecuta el engine con un timeout de seguridad de 10 segundos.
 * Si el engine excede el tiempo, aborta con error 408 (Request Timeout).
 * Ref: T-BE-063, HU-06
 */
export async function executeWithTimeout(
  nombre: string,
  data: number[],
): Promise<SimulationStep[]> {
  const engine = getEngine(nombre);

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timeout: Engine execution exceeded 10 seconds'));
    }, 10000); // 10 segundos

    try {
      const result = engine.execute(data);
      clearTimeout(timeout);
      resolve(result);
    } catch (error) {
      clearTimeout(timeout);
      reject(error);
    }
  });
}
