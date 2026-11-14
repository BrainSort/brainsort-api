import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiOkResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { BadgesService } from './badges.service';
import { BadgeResponseDto } from './dto/badge-response.dto';

@ApiTags('insignias', 'badges')
@Controller(['insignias', 'badges'])
export class BadgesController {
  constructor(private readonly badgesService: BadgesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener catálogo general de insignias disponibles',
    description:
      'Retorna todas las insignias del sistema con sus metadatos descriptivos y criterios de desbloqueo',
  })
  @ApiOkResponse({
    description: 'Catálogo general de insignias',
    type: [BadgeResponseDto],
  })
  async getAllBadges(): Promise<BadgeResponseDto[]> {
    return this.badgesService.getAllBadges();
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener insignias del usuario autenticado',
    description:
      'Retorna las insignias desbloqueadas (con fecha de obtención) y bloqueadas (con pista de cómo conseguirlas) del usuario actual',
  })
  @ApiOkResponse({
    description: 'Colección de insignias del usuario',
    type: [BadgeResponseDto],
  })
  async getUserBadges(@Request() req): Promise<BadgeResponseDto[]> {
    const usuarioId = req.user.id;
    return this.badgesService.getUserBadges(usuarioId);
  }

  @Get('user/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Obtener insignias de un usuario por ID',
    description:
      'Retorna las insignias desbloqueadas y bloqueadas para el usuario especificado',
  })
  @ApiOkResponse({
    description: 'Colección de insignias del usuario',
    type: [BadgeResponseDto],
  })
  async getBadgesByUserId(
    @Param('id') id: string,
    @Request() req,
  ): Promise<BadgeResponseDto[]> {
    const targetUserId = id === 'me' ? req.user.id : id;
    return this.badgesService.getUserBadges(targetUserId);
  }
}
