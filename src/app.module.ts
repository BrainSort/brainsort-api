import { Module } from '@nestjs/common';
import { AlgorithmsModule } from './algorithms/algorithms.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, AlgorithmsModule, AuthModule, UsersModule],
})
export class AppModule {}
