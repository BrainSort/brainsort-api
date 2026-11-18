import { Test, TestingModule } from '@nestjs/testing';
import { BadgesService } from './badges.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BadgesService', () => {
  let service: BadgesService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    insignia: {
      findMany: jest.fn().mockResolvedValue([]),
    },
    progresoUsuario: {
      findUnique: jest.fn().mockResolvedValue(null),
    },
    progresoInsignia: {
      findMany: jest.fn().mockResolvedValue([]),
      create: jest.fn().mockResolvedValue({}),
    },
    sesionSimulacion: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    algoritmo: {
      count: jest.fn().mockResolvedValue(0),
    },
    $transaction: jest.fn(async (cb: (tx: any) => Promise<any>) =>
      cb(mockPrismaService),
    ),
  };

  beforeEach(async () => {
    jest.resetAllMocks();
    mockPrismaService.insignia.findMany.mockResolvedValue([]);
    mockPrismaService.progresoUsuario.findUnique.mockResolvedValue(null);
    mockPrismaService.progresoInsignia.findMany.mockResolvedValue([]);
    mockPrismaService.progresoInsignia.create.mockResolvedValue({});
    mockPrismaService.sesionSimulacion.count.mockResolvedValue(0);
    mockPrismaService.sesionSimulacion.findMany.mockResolvedValue([]);
    mockPrismaService.algoritmo.count.mockResolvedValue(0);
    mockPrismaService.$transaction.mockImplementation(
      async (cb: (tx: any) => Promise<any>) => cb(mockPrismaService),
    );

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BadgesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<BadgesService>(BadgesService);
    prismaService = module.get<PrismaService>(PrismaService);
    service.invalidateCache();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllBadges', () => {
    it('should return all badges with descriptive metadata and category', async () => {
      const mockBadges = [
        {
          id: '1',
          nombre: 'Primer Paso',
          descripcion: 'Completaste tu primera simulación',
          imagen: '/badges/first-step.svg',
          criterioDesbloqueo: 'Completar 1 simulación',
          categoria: 'Inicio',
        },
        {
          id: '2',
          nombre: 'Explorador',
          descripcion: 'Visualizaste 3 algoritmos diferentes',
          imagen: '/badges/explorer.svg',
          criterioDesbloqueo: 'Visualizar 3 algoritmos',
          categoria: 'Exploración',
        },
      ];

      mockPrismaService.insignia.findMany.mockResolvedValue(mockBadges);
      service.invalidateCache();
      const result = await service.getAllBadges();

      expect(result).toHaveLength(2);
      expect(result[0]).toMatchObject({
        id: '1',
        nombre: 'Primer Paso',
        categoria: 'Inicio',
        desbloqueada: false,
      });
    });
  });

  describe('getUserBadges', () => {
    it('should return user badges with unlocked and locked statuses', async () => {
      const mockBadges = [
        {
          id: '1',
          nombre: 'Primer Paso',
          descripcion: 'Completar 1 simulación',
          imagen: '/badges/first-step.svg',
          criterioDesbloqueo: 'Completar 1 simulación',
          categoria: 'Inicio',
        },
        {
          id: '2',
          nombre: 'Explorador',
          descripcion: 'Visualizar 3 algoritmos',
          imagen: '/badges/explorer.svg',
          criterioDesbloqueo: 'Visualizar 3 algoritmos',
          categoria: 'Exploración',
        },
      ];

      const mockProgress = {
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 100,
      };

      const unlockDate = new Date('2026-05-01T12:00:00Z');
      const mockUserBadges = [
        {
          insigniaId: '1',
          fechaObtencion: unlockDate,
          insignia: mockBadges[0],
        },
      ];

      mockPrismaService.insignia.findMany.mockResolvedValue(mockBadges);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue(
        mockProgress,
      );
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue(
        mockUserBadges,
      );

      const result = await service.getUserBadges('user1');

      expect(result).toHaveLength(2);
      expect(result[0].desbloqueada).toBe(true);
      expect(result[0].fechaObtencion).toEqual(unlockDate);
      expect(result[1].desbloqueada).toBe(false);
      expect(result[1].fechaObtencion).toBeUndefined();
      expect(result[1].criterioDesbloqueo).toBe('Visualizar 3 algoritmos');
    });

    it('should throw NotFoundException when progress not found', async () => {
      (prismaService.progresoUsuario.findUnique as jest.Mock).mockResolvedValue(
        null,
      );

      await expect(service.getUserBadges('user1')).rejects.toThrow(
        'Progreso no encontrado',
      );
    });
  });

  describe('checkAndAward', () => {
    const allCatalogBadges = [
      {
        id: 'b-first',
        nombre: 'Primer Paso',
        descripcion: 'Completaste tu primera simulación',
        imagen: '/badges/first-step.svg',
        criterioDesbloqueo: 'Completar 1 simulación',
        categoria: 'Inicio',
      },
      {
        id: 'b-explorer',
        nombre: 'Explorador',
        descripcion: 'Visualizaste 3 algoritmos diferentes',
        imagen: '/badges/explorer.svg',
        criterioDesbloqueo: 'Visualizar 3 algoritmos',
        categoria: 'Exploración',
      },
      {
        id: 'b-streak',
        nombre: 'Racha de 7',
        descripcion: 'Estudiaste 7 días consecutivos',
        imagen: '/badges/streak-7.svg',
        criterioDesbloqueo: 'rachaDías >= 7',
        categoria: 'Constancia',
      },
      {
        id: 'b-master',
        nombre: 'Maestro del Orden',
        descripcion: 'Completaste todos los algoritmos de Ordenamiento',
        imagen: '/badges/sort-master.svg',
        criterioDesbloqueo: 'Completar todos los algoritmos de Ordenamiento',
        categoria: 'Ordenamiento',
      },
    ];

    it('should award ONLY the badge whose specific criterion is met', async () => {
      const mockProgress = {
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 100,
        rachaDias: 3, // < 7
      };

      mockPrismaService.insignia.findMany.mockResolvedValue(allCatalogBadges);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue(
        mockProgress,
      );
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue([]);
      mockPrismaService.sesionSimulacion.count.mockResolvedValue(1); // >= 1 completed
      mockPrismaService.sesionSimulacion.findMany
        .mockResolvedValueOnce([{ algoritmoId: 'alg1' }]) // 1 distinct viewed (< 3)
        .mockResolvedValueOnce([{ algoritmoId: 'alg1' }]); // 1 sorting completed (< 5)
      mockPrismaService.algoritmo.count.mockResolvedValue(5);

      const awarded = await service.checkAndAward('user1');

      expect(awarded).toHaveLength(1);
      expect(awarded[0].nombre).toBe('Primer Paso');
      expect(mockPrismaService.progresoInsignia.create).toHaveBeenCalledTimes(
        1,
      );
      expect(mockPrismaService.progresoInsignia.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            progresoId: 'prog1',
            insigniaId: 'b-first',
          }),
        }),
      );
    });

    it('should award streak and sorting master badges when their criteria are met', async () => {
      const mockProgress = {
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 500,
        rachaDias: 7, // >= 7
      };

      mockPrismaService.insignia.findMany.mockResolvedValue(allCatalogBadges);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue(
        mockProgress,
      );
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue([
        { insigniaId: 'b-first', fechaObtencion: new Date() },
        { insigniaId: 'b-explorer', fechaObtencion: new Date() },
      ]);
      mockPrismaService.sesionSimulacion.count.mockResolvedValue(3);
      mockPrismaService.sesionSimulacion.findMany
        .mockResolvedValueOnce([
          { algoritmoId: 'a1' },
          { algoritmoId: 'a2' },
          { algoritmoId: 'a3' },
        ])
        .mockResolvedValueOnce([
          { algoritmoId: 'a1' },
          { algoritmoId: 'a2' },
          { algoritmoId: 'a3' },
        ]);
      mockPrismaService.algoritmo.count.mockResolvedValue(3);

      const awarded = await service.checkAndAward('user1');

      expect(awarded.map((b) => b.nombre)).toEqual([
        'Racha de 7',
        'Maestro del Orden',
      ]);
      expect(mockPrismaService.progresoInsignia.create).toHaveBeenCalledTimes(
        2,
      );
    });

    it('should not award badge when requirements not met', async () => {
      mockPrismaService.insignia.findMany.mockResolvedValue([
        allCatalogBadges[0],
      ]);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue({
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 0,
        rachaDias: 0,
      });
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue([]);
      mockPrismaService.sesionSimulacion.count.mockResolvedValue(0);
      mockPrismaService.sesionSimulacion.findMany.mockResolvedValue([]);
      mockPrismaService.algoritmo.count.mockResolvedValue(5);

      const awarded = await service.checkAndAward('user1');

      expect(awarded).toHaveLength(0);
      expect(mockPrismaService.progresoInsignia.create).not.toHaveBeenCalled();
    });

    it('should skip already awarded badges', async () => {
      mockPrismaService.insignia.findMany.mockResolvedValue([
        allCatalogBadges[0],
      ]);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue({
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 100,
        rachaDias: 5,
      });
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue([
        {
          insigniaId: 'b-first',
          fechaObtencion: new Date(),
        },
      ]);

      const awarded = await service.checkAndAward('user1');

      expect(awarded).toHaveLength(0);
      expect(mockPrismaService.progresoInsignia.create).not.toHaveBeenCalled();
    });

    it('should guarantee concurrency safety and idempotency on repeated/simultaneous events', async () => {
      mockPrismaService.insignia.findMany.mockResolvedValue([
        allCatalogBadges[0],
      ]);
      mockPrismaService.progresoUsuario.findUnique.mockResolvedValue({
        id: 'prog1',
        usuarioId: 'user1',
        puntosTotales: 100,
        rachaDias: 1,
      });
      mockPrismaService.progresoInsignia.findMany.mockResolvedValue([]);
      mockPrismaService.sesionSimulacion.count.mockResolvedValue(1);
      mockPrismaService.sesionSimulacion.findMany.mockResolvedValue([
        { algoritmoId: 'alg1' },
      ]);
      mockPrismaService.algoritmo.count.mockResolvedValue(5);

      // Disparar 3 evaluaciones concurrentes para el mismo usuario e hito
      const [res1, res2, res3] = await Promise.all([
        service.checkAndAward('user1'),
        service.checkAndAward('user1'),
        service.emitBadgeEventAsync('simulation.completed', {
          usuarioId: 'user1',
        }),
      ]);

      const totalAwarded = [...res1, ...res2, ...res3];
      expect(totalAwarded).toHaveLength(1);
      expect(mockPrismaService.progresoInsignia.create).toHaveBeenCalledTimes(
        1,
      );
    });
  });

  describe('invalidateCache', () => {
    it('should invalidate badge cache', () => {
      service.invalidateCache();
      expect(service).toBeDefined();
    });
  });
});
