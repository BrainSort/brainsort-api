import { Module } from '@nestjs/common';
import { AlgorithmsModule } from './algorithms/algorithms.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SimulationsModule } from './simulations/simulations.module';
import { ExercisesModule } from './exercises/exercises.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [
    PrismaModule,
    AlgorithmsModule,
    AuthModule,
    UsersModule,
    SimulationsModule,
    ExercisesModule,
    ProgressModule,
  ],
})
export class AppModule {}
