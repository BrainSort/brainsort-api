import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { LightMyRequestResponse } from 'fastify';
import { AppModule } from './../src/app.module';

// Tipos para respuestas de simulación
interface Algoritmo {
  id: string;
  nombre: string;
}

interface LibraryResponse {
  data: {
    algoritmos: Algoritmo[];
  };
}

interface SimulationStep {
  numeroPaso: number;
  tipoOperacion: string;
  indicesActivos: number[];
  estadoArray: number[];
  lineaPseudocodigo: number;
}

interface SimulationResponse {
  pasos: SimulationStep[];
  sesionId: string;
}

interface AuthResponse {
  accessToken: string;
}

describe('SimulationsController (e2e)', () => {
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

    // Registrar usuario para obtener token de autenticación
    const email = `simtest${Date.now()}@example.com`;
    const registerResponse: LightMyRequestResponse = await app
      .getHttpAdapter()
      .getInstance()
      .inject({
        method: 'POST',
        url: '/api/auth/register',
        payload: {
          email,
          password: 'Password123!',
          nombre: 'Simulation Test',
        },
      });

    const registerBody = JSON.parse(registerResponse.payload) as AuthResponse;
    authToken = registerBody.accessToken;
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/simulaciones', () => {
    it('debe crear una simulación exitosamente', async () => {
      // Primero obtener un algoritmo válido
      const libraryResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/biblioteca',
        });

      const libraryBody = JSON.parse(
        libraryResponse.payload,
      ) as LibraryResponse;
      const algoritmoId = libraryBody.data.algoritmos[0]?.id;

      if (!algoritmoId) {
        console.log('No hay algoritmos disponibles para test');
        return;
      }

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/simulaciones',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            algoritmoId,
            conjuntoDeDatos: {
              tipo: 'Predeterminado',
              tamano: 5,
              valores: [10, 5, 8, 3, 1],
            },
          },
        });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.payload) as SimulationResponse;
      expect(body).toHaveProperty('pasos');
      expect(body).toHaveProperty('sesionId');
      expect(Array.isArray(body.pasos)).toBe(true);
    });

    it('debe rechazar simulación sin autenticación', async () => {
      const libraryResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/biblioteca',
        });

      const libraryBody = JSON.parse(
        libraryResponse.payload,
      ) as LibraryResponse;
      const algoritmoId = libraryBody.data.algoritmos[0]?.id;

      if (!algoritmoId) {
        console.log('No hay algoritmos disponibles para test');
        return;
      }

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/simulaciones',
          payload: {
            algoritmoId,
            conjuntoDeDatos: {
              tipo: 'Predeterminado',
              tamano: 5,
              valores: [10, 5, 8, 3, 1],
            },
          },
        });

      expect(response.statusCode).toBe(401);
    });

    it('debe rechazar simulación con algoritmo inexistente', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/simulaciones',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            algoritmoId: 'id-inexistente-12345',
            conjuntoDeDatos: {
              tipo: 'Predeterminado',
              tamano: 5,
              valores: [10, 5, 8, 3, 1],
            },
          },
        });

      expect(response.statusCode).toBe(404);
    });

    it('debe rechazar simulación con datos inválidos', async () => {
      const libraryResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/biblioteca',
        });

      const libraryBody = JSON.parse(
        libraryResponse.payload,
      ) as LibraryResponse;
      const algoritmoId = libraryBody.data.algoritmos[0]?.id;

      if (!algoritmoId) {
        console.log('No hay algoritmos disponibles para test');
        return;
      }

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/simulaciones',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            algoritmoId,
            conjuntoDeDatos: {
              tipo: 'Predeterminado',
              tamano: 5,
              valores: [null, 5, 8, 3, 1], // Valor nulo inválido
            },
          },
        });

      expect(response.statusCode).toBe(400);
    });

    it('debe generar pasos con estructura correcta', async () => {
      const libraryResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/biblioteca',
        });

      const libraryBody = JSON.parse(
        libraryResponse.payload,
      ) as LibraryResponse;
      const algoritmoId = libraryBody.data.algoritmos[0]?.id;

      if (!algoritmoId) {
        console.log('No hay algoritmos disponibles para test');
        return;
      }

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/simulaciones',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            algoritmoId,
            conjuntoDeDatos: {
              tipo: 'Predeterminado',
              tamano: 5,
              valores: [10, 5, 8, 3, 1],
            },
          },
        });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.payload) as SimulationResponse;
      expect(body.pasos.length).toBeGreaterThan(0);

      body.pasos.forEach((paso: SimulationStep) => {
        expect(paso).toHaveProperty('numeroPaso');
        expect(paso).toHaveProperty('tipoOperacion');
        expect(paso).toHaveProperty('indicesActivos');
        expect(paso).toHaveProperty('estadoArray');
        expect(paso).toHaveProperty('lineaPseudocodigo');
      });
    });
  });
});
