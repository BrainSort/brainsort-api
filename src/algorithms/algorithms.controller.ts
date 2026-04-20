import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlgorithmsService } from './algorithms.service';
import { LibraryQueryDto } from './dto/library-query.dto';
import { LibraryResponseDto } from './dto/algorithm-response.dto';
import { AlgorithmLibraryCardDto } from './dto/algorithm-response.dto';

@ApiTags('biblioteca')
@Controller('biblioteca')
export class AlgorithmsController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get()
  @ApiOperation({ summary: 'CO1 — Obtener biblioteca de algoritmos' })
  @ApiResponse({
    status: 200,
    description: 'Catálogo listo para UI',
    type: LibraryResponseDto,
  })
  async getLibrary(@Query() query: LibraryQueryDto) {
    const data = await this.algorithmsService.getLibrary(query);
    return { data, message: 'Operación exitosa' };
  }
}

@ApiTags('algoritmos')
@Controller('algoritmos')
export class AlgorithmDetailController {
  constructor(private readonly algorithmsService: AlgorithmsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'CO2 — Obtener detalle de un algoritmo' })
  @ApiResponse({
    status: 200,
    description: 'Detalle del algoritmo',
    type: AlgorithmLibraryCardDto,
  })
  async getAlgorithm(@Param('id') id: string) {
    const data = await this.algorithmsService.getAlgorithm(id);
    return { data, message: 'Operación exitosa' };
  }
}
