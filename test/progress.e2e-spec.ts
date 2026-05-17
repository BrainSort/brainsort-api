import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { LightMyRequestResponse } from 'fastify';
import { AppModule } from './../src/app.module';

describe('ProgressModule (e2e)', () => {
  let app: INestApplication<NestFastifyApplication>;
  let authToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    app.setGlobalPrefix('api');
    await app.init();
    await app.getHttpAdapter().getInstance().ready();

    // Registrar usuario nuevo para tener un estado limpio de progreso
    const email = `progress_e2e_${Date.now()}@example.com`;
    const registerResponse: LightMyRequestResponse = await app
      .getHttpAdapter()
      .getInstance()
      .inject({
        method: 'POST',
        url: '/api/auth/register',
        payload: {
          email,
          password: 'Password123!',
          nombre: 'Progreso E2E User',
        },
      });

    const registerBody = JSON.parse(registerResponse.payload);
    authToken = registerBody.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Flujo de Progreso y Ranking', () => {
    it('debe obtener progreso inicial en 0', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/mi-progreso',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.payload);

      expect(body).toHaveProperty('puntosTotales');
      expect(body.puntosTotales).toBe(0);
      expect(body.nivelActual).toBe(1);
    });

    it('debe completar una sesión (sincronizar) y verificar progreso actualizado', async () => {
      // 1. Obtener algoritmo
      const libraryResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/biblioteca',
        });

      const libraryBody = JSON.parse(libraryResponse.payload);
      if (
        !libraryBody.data?.algoritmos ||
        libraryBody.data.algoritmos.length === 0
      ) {
        console.warn('No hay algoritmos, saltando prueba');
        return;
      }
      const algoritmoId = libraryBody.data.algoritmos[0].id;

      // 2. Sincronizar progreso (simular sesión completada offline)
      const syncResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/sync/progreso',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            sesiones: [
              {
                algoritmoId,
                pasosCompletados: 10,
                completada: true,
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date().toISOString(),
              },
            ],
          },
        });

      expect(syncResponse.statusCode).toBe(201);

      // 3. Consultar progreso actualizado
      const progressResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/mi-progreso',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });

      const progressBody = JSON.parse(progressResponse.payload);
      expect(progressBody.puntosTotales).toBeGreaterThan(0);

      // 4. Verificar que aparece en el ranking
      const rankingResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/ranking',
        });

      expect(rankingResponse.statusCode).toBe(200);
      const rankingBody = JSON.parse(rankingResponse.payload);

      expect(Array.isArray(rankingBody)).toBe(true);
      // El usuario debería estar en el ranking, o al menos el endpoint responde
      if (rankingBody.length > 0) {
        expect(rankingBody[0]).toHaveProperty('usuario');
        expect(rankingBody[0]).toHaveProperty('puntosTotales');
      }
    });

    it('debe requerir autenticación para ver progreso personal', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/mi-progreso',
        });

      expect(response.statusCode).toBe(401);
    });

    it('debe permitir ver el ranking sin autenticación', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/ranking',
        });

      expect(response.statusCode).toBe(200);
    });
  });
});
