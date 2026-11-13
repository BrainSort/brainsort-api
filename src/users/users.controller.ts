import {
  Controller,
  Get,
  Patch,
  Body,
  Param,
  UseGuards,
  Req,
  Optional,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiOkResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import { BadgesService } from '../badges/badges.service';
import { BadgeResponseDto } from '../badges/dto/badge-response.dto';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    @Optional() private badgesService?: BadgesService,
  ) {}

  @Get('me')
  async getProfile(@Req() req: RequestWithUser) {
    return this.usersService.getProfile(req.user.id);
  }

  @Patch('me')
  async updateProfile(
    @Req() req: RequestWithUser,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(req.user.id, updateUserDto);
  }

  @Get(':id/badges')
  @ApiOperation({
    summary: 'Obtener insignias desbloqueadas y bloqueadas de un usuario',
    description:
      'Retorna el catálogo de insignias indicando cuáles ha desbloqueado el usuario (con fecha de obtención) y cuáles siguen bloqueadas (con pista de cómo conseguirlas)',
  })
  @ApiOkResponse({
    description: 'Lista de insignias del usuario',
    type: [BadgeResponseDto],
  })
  async getUserBadges(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
  ): Promise<BadgeResponseDto[]> {
    const targetUserId = id === 'me' ? req.user.id : id;
    if (!this.badgesService) {
      return [];
    }
    return this.badgesService.getUserBadges(targetUserId);
  }
}
