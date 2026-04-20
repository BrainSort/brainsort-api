import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsDate, IsInt, IsBoolean } from 'class-validator';

export class OfflineSessionDto {
  @ApiProperty({ description: 'ID del algoritmo' })
  @IsString()
  algoritmoId: string;

  @ApiProperty({ description: 'Fecha de inicio de la sesión' })
  @IsDate()
  fechaInicio: Date;

  @ApiProperty({ description: 'Fecha de fin de la sesión' })
  @IsDate()
  fechaFin: Date;

  @ApiProperty({ description: 'Pasos completados' })
  @IsInt()
  pasosCompletados: number;

  @ApiProperty({ description: 'Indica si la sesión está completada' })
  @IsBoolean()
  completada: boolean;
}

export class SyncProgressDto {
  @ApiProperty({
    description: 'Sesiones offline para sincronizar',
    type: [OfflineSessionDto],
  })
  @IsArray()
  sesiones: OfflineSessionDto[];
}

export class SyncResponseDto {
  @ApiProperty({ description: 'Número de sesiones sincronizadas' })
  sincronizados: number;

  @ApiProperty({ description: 'Puntos actualizados' })
  puntosActualizados: number;
}
