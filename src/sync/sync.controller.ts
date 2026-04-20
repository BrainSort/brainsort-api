import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SyncService } from './sync.service';
import { SyncProgressDto } from './dto/sync-progress.dto';

@ApiTags('progress')
@Controller('progress')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post('sync')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Sincronizar progreso offline',
    description:
      'Recibe un batch de sesiones offline y las sincroniza con el servidor. Retorna el número de sesiones sincronizadas y puntos actualizados.',
  })
  async syncProgress(
    @Body() syncProgressDto: SyncProgressDto,
    @Request() req,
  ) {
    const usuarioId = req.user.id;
    return this.syncService.syncProgress(usuarioId, syncProgressDto);
  }
}
