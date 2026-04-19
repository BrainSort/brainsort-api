import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlgorithmsService } from './algorithms.service';
import { LibraryQueryDto } from './dto/library-query.dto';
import { LibraryResponseDto } from './dto/algorithm-response.dto';

@ApiTags('biblioteca')
@Controller('biblioteca')
export class AlgorithmsController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get()
  @ApiOperation({ summary: 'CO1 — Obtener biblioteca de algoritmos' })
  @ApiResponse({ status: 200, description: 'Catálogo listo para UI', type: LibraryResponseDto })
  async getLibrary(@Query() query: LibraryQueryDto) {
    const data = await this.algorithmsService.getLibrary(query);
    return { data, message: 'Operación exitosa' };
  }
}
