import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsDefined()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsDefined()
  productId: number;
}
