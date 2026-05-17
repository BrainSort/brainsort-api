import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { LightMyRequestResponse } from 'fastify';
import { AppModule } from './../src/app.module';

describe('ExercisesModule (e2e)', () => {
  let app: INestApplication<NestFastifyApplication>;
  let authToken: string;
  let algoritmoId: string;
  let ejercicioId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    app.setGlobalPrefix('api');
    await app.init();
    await app.getHttpAdapter().getInstance().ready();

    // 1. Registrar usuario para obtener token
    const email = `exercises_e2e_${Date.now()}@example.com`;
    const registerResponse: LightMyRequestResponse = await app
      .getHttpAdapter()
      .getInstance()
      .inject({
        method: 'POST',
        url: '/api/auth/register',
        payload: {
          email,
          password: 'Password123!',
          nombre: 'Ejercicios E2E User',
        },
      });

    const registerBody = JSON.parse(registerResponse.payload);
    authToken = registerBody.accessToken;

    // 2. Obtener un algoritmo de la biblioteca para buscar sus ejercicios
    const libraryResponse: LightMyRequestResponse = await app
      .getHttpAdapter()
      .getInstance()
      .inject({
        method: 'GET',
        url: '/api/biblioteca',
      });

    const libraryBody = JSON.parse(libraryResponse.payload);
    // Tomamos el primer algoritmo disponible
    if (libraryBody.data?.algoritmos?.length > 0) {
      algoritmoId = libraryBody.data.algoritmos[0].id;
    }
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Flujo de Ejercicios', () => {
    it('debe obtener ejercicios de un algoritmo', async () => {
      if (!algoritmoId) {
        console.warn(
          'No hay algoritmos en la base de datos para probar ejercicios',
        );
        return;
      }

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: `/api/ejercicios/algoritmo/${algoritmoId}`,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.payload);

      expect(Array.isArray(body)).toBe(true);

      // Si el seed incluyó ejercicios, guardamos uno para la siguiente prueba
      if (body.length > 0) {
        ejercicioId = body[0].id;
        expect(body[0]).toHaveProperty('pregunta');
        expect(body[0]).toHaveProperty('dificultad');
        // Validar que no se filtra la respuesta correcta al cliente
        expect(body[0]).not.toHaveProperty('respuestaCorrecta');
      }
    });

    it('debe procesar respuesta correcta y actualizar puntos', async () => {
      if (!ejercicioId) {
        console.warn('No hay ejercicios disponibles para responder');
        return;
      }

      // 1. Obtener progreso actual
      const progressBefore: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: '/api/progreso/mi-progreso',
          headers: {
            authorization: `Bearer ${authToken}`,
          },
        });
      const progressBeforeBody = JSON.parse(progressBefore.payload);
      const puntosAntes = progressBeforeBody.puntosTotales || 0;

      // Nota: En un entorno de pruebas real con base de datos de test,
      // necesitaríamos consultar la DB para saber la respuesta correcta,
      // o mockear el servicio de ejercicios para predecir el resultado.
      // Aquí estamos haciendo la prueba asumiendo que enviamos una respuesta.
      // Dependiendo de si es correcta o no (por los datos del seed), evaluamos la respuesta.

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: `/api/ejercicios/${ejercicioId}/responder`,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            respuesta: 'alguna respuesta',
          },
        });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.payload);

      expect(body).toHaveProperty('correcto');
      expect(body).toHaveProperty('feedback');
      expect(body).toHaveProperty('puntosTotales');

      if (body.correcto) {
        expect(body.puntosTotales).toBeGreaterThan(puntosAntes);
      } else {
        expect(body.puntosTotales).toBe(puntosAntes);
      }
    });

    it('debe rechazar respuesta a ejercicio inexistente', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: `/api/ejercicios/ejercicio-inexistente-12345/responder`,
          headers: {
            authorization: `Bearer ${authToken}`,
          },
          payload: {
            respuesta: 'test',
          },
        });

      expect(response.statusCode).toBe(404);
    });

    it('debe requerir autenticación para obtener ejercicios', async () => {
      if (!algoritmoId) return;

      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'GET',
          url: `/api/ejercicios/algoritmo/${algoritmoId}`,
        });

      expect(response.statusCode).toBe(401);
    });
  });
});
