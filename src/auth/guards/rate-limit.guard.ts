import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

@Injectable()
export class RateLimitGuard implements CanActivate {
  private rateLimitMap = new Map<string, RateLimitEntry>();
  private readonly MAX_ATTEMPTS = 5;
  private readonly BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 minutes

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const identifier = this.getIdentifier(request);

    const now = Date.now();
    const entry = this.rateLimitMap.get(identifier);

    // Check if currently blocked
    if (entry && now < entry.resetTime) {
      const remainingTime = Math.ceil((entry.resetTime - now) / 1000 / 60);
      throw new HttpException(
        `Too many failed attempts. Try again in ${remainingTime} minutes.`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    // Reset if block period has passed
    if (entry && now >= entry.resetTime) {
      this.rateLimitMap.delete(identifier);
    }

    return true;
  }

  recordFailedAttempt(identifier: string): void {
    const now = Date.now();
    const entry = this.rateLimitMap.get(identifier);

    if (entry) {
      entry.count++;
      if (entry.count >= this.MAX_ATTEMPTS) {
        entry.resetTime = now + this.BLOCK_DURATION_MS;
      }
    } else {
      this.rateLimitMap.set(identifier, {
        count: 1,
        resetTime: now + this.BLOCK_DURATION_MS,
      });
    }
  }

  resetAttempts(identifier: string): void {
    this.rateLimitMap.delete(identifier);
  }

  private getIdentifier(request: Request): string {
    // Use IP address or email as identifier
    const ip = request.ip || request.socket.remoteAddress || 'unknown';
    const body = request.body;
    const email = body?.correo || '';
    return `${ip}:${email}`;
  }
}
