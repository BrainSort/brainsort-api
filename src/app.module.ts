import { Module } from '@nestjs/common';
import { AlgorithmsModule } from './algorithms/algorithms.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AlgorithmsModule],
})
export class AppModule {}
