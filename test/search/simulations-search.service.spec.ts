import { Test, TestingModule } from '@nestjs/testing';
import { SimulationsService } from '../../src/simulations/simulations.service';
import { PrismaService } from '../../src/prisma/prisma.service';
import { BadgesService } from '../../src/badges/badges.service';

describe('SimulationsService - Search Algorithms Integration', () => {
  let service: SimulationsService;

  const mockPrismaService = {
    algoritmo: {
      findUnique: jest.fn(),
    },
    sesionSimulacion: {
      create: jest.fn(),
    },
  };

  const mockBadgesService = {
    checkAndAward: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SimulationsService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: BadgesService, useValue: mockBadgesService },
      ],
    }).compile();

    service = module.get<SimulationsService>(SimulationsService);
  });

  it('debe ejecutar Linear Search con objetivo personalizado y retornar contexto', async () => {
    mockPrismaService.algoritmo.findUnique.mockResolvedValue({
      id: 'linear-search-id',
      nombre: 'Linear Search',
      categoria: 'Busqueda',
      activo: true,
      pseudocodigo: [
        { line: 1, text: 'Para i = 0 hasta n-1' },
        { line: 2, text: '  Si array[i] == objetivo: retornar i' },
      ],
      visualizacion: null,
    });
    mockPrismaService.sesionSimulacion.create.mockResolvedValue({ id: 's1' });

    const result = await service.createSimulation(
      {
        algoritmoId: 'linear-search-id',
        conjuntoDeDatos: {
          valores: [12, 24, 36, 48],
          tipoOrigen: 'Personalizado',
          tamano: 4,
        },
        objetivo: 36,
      },
      'usr-1',
    );

    expect(result).toHaveProperty('pasos');
    const finalStep = result.pasos[result.pasos.length - 1];
    expect(finalStep.contexto?.resultado).toBe('encontrado');
    expect(finalStep.contexto?.indiceEncontrado).toBe(2);
    expect(finalStep.contexto?.objetivo).toBe(36);
  });

  it('debe ejecutar Binary Search con objetivo inexistente y retornar noEncontrado', async () => {
    mockPrismaService.algoritmo.findUnique.mockResolvedValue({
      id: 'binary-search-id',
      nombre: 'Binary Search',
      categoria: 'Busqueda',
      activo: true,
      pseudocodigo: [
        { line: 1, text: 'low = 0; high = n-1' },
        { line: 2, text: 'mid = (low + high) / 2' },
      ],
      visualizacion: null,
    });
    mockPrismaService.sesionSimulacion.create.mockResolvedValue({ id: 's2' });

    const result = await service.createSimulation(
      {
        algoritmoId: 'binary-search-id',
        conjuntoDeDatos: {
          valores: [10, 20, 30, 40, 50],
          tipoOrigen: 'Personalizado',
          tamano: 5,
        },
        objetivo: 99,
      },
      'usr-1',
    );

    const finalStep = result.pasos[result.pasos.length - 1];
    expect(finalStep.contexto?.resultado).toBe('noEncontrado');
    expect(finalStep.contexto?.objetivo).toBe(99);
  });
});
