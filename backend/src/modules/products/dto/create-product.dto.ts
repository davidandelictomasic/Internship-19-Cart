import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Nike Air Max' })
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty({ example: 99.99 })
  @IsNumber()
  @IsDefined()
  price: number;

  @ApiProperty({ required: false, example: 'Comfortable running shoes' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false, example: 'Nike' })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({ required: false, example: 1 })
  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({ required: false, example: ['S', 'M', 'L', 'XL'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  sizes?: string[];

  @ApiProperty({ required: false, example: ['Red', 'Blue', 'Black'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  colors?: string[];

  @ApiProperty({ required: false, example: ['/assets/products/image1.png', '/assets/products/image2.png'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  posterUrls?: string[];

  @ApiProperty({ required: false, default: true })
  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;
}
