import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { Rol } from '../../generated/prisma';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RateLimitGuard } from './guards/rate-limit.guard';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private rateLimitGuard: RateLimitGuard,
  ) {}

  async register(registerDto: RegisterDto) {
    const { nombre, correo, rol, contrasena } = registerDto;

    // Check if email already exists
    const existingUser = await this.prisma.usuario.findUnique({
      where: { correo },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Create user
    const user = await this.prisma.usuario.create({
      data: {
        nombre,
        correo,
        rol: rol as Rol,
        contrasena: hashedPassword,
      },
    });

    // Create user progress
    await this.prisma.progresoUsuario.create({
      data: {
        usuarioId: user.id,
        puntosTotales: 0,
        nivelActual: 1,
        rachaDias: 0,
        posicionRanking: 0,
      },
    });

    // Generate tokens
    const tokens = this.generateTokens(user.id, user.correo, user.rol, 'usuario');

    return {
      ...tokens,
      usuario: {
        id: user.id,
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
        tipo: 'usuario',
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { correo, contrasena } = loginDto;

    // Get identifier for rate limiting
    const identifier = `${correo}`;

    // Check rate limit
    try {
      this.rateLimitGuard.canActivate({
        switchToHttp: () => ({
          getRequest: () => ({
            ip: 'unknown',
            body: { correo },
            socket: { remoteAddress: 'unknown' },
          }),
        }),
      } as any);
    } catch (error) {
      // Rate limit exceeded
      throw error;
    }

    // Search in users table first
    const user = await this.prisma.usuario.findUnique({
      where: { correo },
    });

    let tipo = 'usuario';
    let rol: string;
    let userId: string;
    let userName: string;
    let userCorreo: string;
    let password: string;

    // If not found in users, search in administrators
    if (!user) {
      const admin = await this.prisma.administrador.findUnique({
        where: { correo },
      });

      if (admin) {
        tipo = 'administrador';
        rol = 'Administrador';
        userId = admin.id;
        userName = admin.nombre;
        userCorreo = admin.correo;
        password = admin.contrasena;

        // Update ultimoAcceso for administrators
        await this.prisma.administrador.update({
          where: { id: admin.id },
          data: { ultimoAcceso: new Date() },
        });
      } else {
        this.rateLimitGuard.recordFailedAttempt(identifier);
        throw new UnauthorizedException('Invalid credentials');
      }
    } else {
      rol = user.rol;
      userId = user.id;
      userName = user.nombre;
      userCorreo = user.correo;
      password = user.contrasena;
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(contrasena, password);

    if (!isPasswordValid) {
      this.rateLimitGuard.recordFailedAttempt(identifier);
      throw new UnauthorizedException('Invalid credentials');
    }

    // Reset rate limit on successful login
    this.rateLimitGuard.resetAttempts(identifier);

    // Generate tokens
    const tokens = this.generateTokens(userId, userCorreo, rol, tipo);

    return {
      ...tokens,
      usuario: {
        id: userId,
        nombre: userName,
        correo: userCorreo,
        rol: rol,
        tipo: tipo,
      },
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);

      const user = await this.prisma.usuario.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const tokens = this.generateTokens(user.id, user.correo, user.rol, payload.tipo || 'usuario');

      return tokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  private generateTokens(userId: string, correo: string, rol: string, tipo: string) {
    const payload = {
      sub: userId,
      correo,
      rol,
      tipo,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: process.env.JWT_EXPIRATION || '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION || '7d',
    });

    return {
      token: accessToken,
      refreshToken,
    };
  }
}
