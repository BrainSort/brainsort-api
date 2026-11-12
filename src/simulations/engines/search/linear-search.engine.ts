import { AlgorithmDefinition, SimulationStep } from '../engine.interface';

export const LinearSearch: AlgorithmDefinition = {
  meta: {
    nombre: 'Linear Search',
    descripcion: 'Revisa cada elemento hasta encontrar el objetivo.',
    complejidadTiempo: 'O(n)',
    complejidadEspacio: 'O(1)',
    categoria: 'Busqueda',
  },
  execute(data: number[], target?: number): SimulationStep[] {
    const resolvedTarget =
      target !== undefined ? target : data[Math.floor(data.length / 2)];
    const steps: SimulationStep[] = [];
    let step = 1;

    for (let i = 0; i < data.length; i++) {
      steps.push({
        numeroPaso: step++,
        tipoOperacion: 'comparacion',
        indicesActivos: [i],
        estadoArray: [...data],
        lineaPseudocodigo: 2,
      });

      if (data[i] === resolvedTarget) {
        steps.push({
          numeroPaso: step++,
          tipoOperacion: 'final',
          indicesActivos: [i],
          estadoArray: [...data],
          lineaPseudocodigo: 3,
        });
        return steps;
      }
    }

    steps.push({
      numeroPaso: step++,
      tipoOperacion: 'final',
      indicesActivos: [],
      estadoArray: [...data],
      lineaPseudocodigo: 4,
    });
    return steps;
  },
};
