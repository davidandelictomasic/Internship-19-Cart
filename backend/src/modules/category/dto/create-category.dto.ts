import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Shoes' })
  @IsString()
  @IsDefined()
  name: string;
}
