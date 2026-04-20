import { Test, TestingModule } from '@nestjs/testing';
import { AlgorithmsService } from './algorithms.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AlgorithmsService', () => {
  let service: AlgorithmsService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    algoritmo: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlgorithmsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<AlgorithmsService>(AlgorithmsService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getLibrary', () => {
    it('should return library with all algorithms when no filters provided', async () => {
      const mockAlgorithms = [
        {
          id: '1',
          nombre: 'Bubble Sort',
          categoria: 'Ordenamiento',
          dificultad: 'Facil',
          complejidadTiempo: 'O(n²)',
          complejidadEspacio: 'O(1)',
          descripcion: 'Algoritmo de ordenamiento',
          activo: true,
        },
        {
          id: '2',
          nombre: 'Binary Search',
          categoria: 'Búsqueda',
          dificultad: 'Medio',
          complejidadTiempo: 'O(log n)',
          complejidadEspacio: 'O(1)',
          descripcion: 'Algoritmo de búsqueda',
          activo: true,
        },
      ];

      mockPrismaService.algoritmo.findMany.mockResolvedValue(mockAlgorithms);

      const result = await service.getLibrary({});

      expect(result).toHaveProperty('categorias');
      expect(result).toHaveProperty('totalAlgoritmos');
      expect(result).toHaveProperty('algoritmos');
      expect(result.totalAlgoritmos).toBe(2);
      expect(result.algoritmos).toHaveLength(2);
    });

    it('should filter by categoria', async () => {
      const mockAlgorithms = [
        {
          id: '1',
          nombre: 'Bubble Sort',
          categoria: 'Ordenamiento',
          dificultad: 'Facil',
          complejidadTiempo: 'O(n²)',
          complejidadEspacio: 'O(1)',
          descripcion: 'Algoritmo de ordenamiento',
          activo: true,
        },
      ];

      mockPrismaService.algoritmo.findMany.mockResolvedValue(mockAlgorithms);

      const result = await service.getLibrary({ categoria: 'Ordenamiento' });

      expect(result.algoritmos).toHaveLength(1);
      expect(result.algoritmos[0].categoria).toBe('Ordenamiento');
      expect(mockPrismaService.algoritmo.findMany).toHaveBeenCalledWith({
        where: {
          categoria: 'Ordenamiento',
          activo: true,
        },
      });
    });

    it('should filter by nombre', async () => {
      const mockAlgorithms = [
        {
          id: '1',
          nombre: 'Bubble Sort',
          categoria: 'Ordenamiento',
          dificultad: 'Facil',
          complejidadTiempo: 'O(n²)',
          complejidadEspacio: 'O(1)',
          descripcion: 'Algoritmo de ordenamiento',
          activo: true,
        },
      ];

      mockPrismaService.algoritmo.findMany.mockResolvedValue(mockAlgorithms);

      const result = await service.getLibrary({ nombre: 'bubble' });

      expect(result.algoritmos).toHaveLength(1);
      expect(result.algoritmos[0].nombre.toLowerCase()).toContain('bubble');
    });

    it('should return empty array when no algorithms match', async () => {
      mockPrismaService.algoritmo.findMany.mockResolvedValue([]);

      const result = await service.getLibrary({ nombre: 'nonexistent' });

      expect(result.algoritmos).toHaveLength(0);
      expect(result.totalAlgoritmos).toBe(0);
    });
  });
});
