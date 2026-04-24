import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { LightMyRequestResponse } from 'fastify';
import { AppModule } from './../src/app.module';

// Tipos para respuestas de autenticación
interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    id: string;
    nombre: string;
  };
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

describe('AuthController (e2e)', () => {
  let app: INestApplication<NestFastifyApplication>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication(new FastifyAdapter());
    app.setGlobalPrefix('api');
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/auth/register', () => {
    it('debe registrar un usuario exitosamente', async () => {
      const uniqueEmail = `test${Date.now()}@example.com`;
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email: uniqueEmail,
            password: 'Password123!',
            nombre: 'Test User',
          },
        });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.payload) as AuthResponse;
      expect(body).toHaveProperty('accessToken');
      expect(body).toHaveProperty('refreshToken');
      expect(body).toHaveProperty('user');
      expect(body.user.email).toBe(uniqueEmail);
    });

    it('debe rechazar registro con email duplicado', async () => {
      const email = `duplicate${Date.now()}@example.com`;

      // Primer registro
      await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email,
            password: 'Password123!',
            nombre: 'Test User',
          },
        });

      // Segundo registro con mismo email
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email,
            password: 'Password123!',
            nombre: 'Test User 2',
          },
        });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.payload) as ErrorResponse;
      expect(body.message).toContain('ya existe');
    });

    it('debe rechazar registro con email inválido', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email: 'email-invalido',
            password: 'Password123!',
            nombre: 'Test User',
          },
        });

      expect(response.statusCode).toBe(400);
    });

    it('debe rechazar registro con contraseña débil', async () => {
      const uniqueEmail = `test${Date.now()}@example.com`;
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email: uniqueEmail,
            password: '123',
            nombre: 'Test User',
          },
        });

      expect(response.statusCode).toBe(400);
    });
  });

  describe('POST /api/auth/login', () => {
    it('debe hacer login exitosamente', async () => {
      const email = `login${Date.now()}@example.com`;

      // Registrar usuario primero
      await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email,
            password: 'Password123!',
            nombre: 'Login Test',
          },
        });

      // Login
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/login',
          payload: {
            email,
            password: 'Password123!',
          },
        });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.payload) as AuthResponse;
      expect(body).toHaveProperty('accessToken');
      expect(body).toHaveProperty('refreshToken');
      expect(body).toHaveProperty('user');
    });

    it('debe rechazar login con credenciales incorrectas', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/login',
          payload: {
            email: 'noexiste@example.com',
            password: 'Password123!',
          },
        });

      expect(response.statusCode).toBe(401);
    });

    it('debe rechazar login con contraseña incorrecta', async () => {
      const email = `wrongpass${Date.now()}@example.com`;

      // Registrar usuario
      await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email,
            password: 'Password123!',
            nombre: 'Wrong Pass Test',
          },
        });

      // Login con contraseña incorrecta
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/login',
          payload: {
            email,
            password: 'WrongPassword123!',
          },
        });

      expect(response.statusCode).toBe(401);
    });
  });

  describe('POST /api/auth/refresh', () => {
    it('debe refrescar el token exitosamente', async () => {
      const email = `refresh${Date.now()}@example.com`;

      // Registrar usuario
      const registerResponse: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/register',
          payload: {
            email,
            password: 'Password123!',
            nombre: 'Refresh Test',
          },
        });

      const registerBody = JSON.parse(registerResponse.payload) as AuthResponse;

      // Refresh token
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/refresh',
          payload: {
            refreshToken: registerBody.refreshToken,
          },
        });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.payload) as AuthResponse;
      expect(body).toHaveProperty('accessToken');
      expect(body).toHaveProperty('refreshToken');
    });

    it('debe rechazar refresh token inválido', async () => {
      const response: LightMyRequestResponse = await app
        .getHttpAdapter()
        .getInstance()
        .inject({
          method: 'POST',
          url: '/api/auth/refresh',
          payload: {
            refreshToken: 'token-invalido',
          },
        });

      expect(response.statusCode).toBe(401);
    });
  });
});
