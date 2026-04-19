import { AlgorithmDefinition } from './engine.interface';
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
