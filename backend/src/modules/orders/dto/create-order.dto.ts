import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsDefined, IsNumber, IsString, ValidateNested } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsDefined()
  productId: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsDefined()
  quantity: number;

  @ApiProperty({ example: 29.99 })
  @IsNumber()
  @IsDefined()
  price: number;
}

export class CreateOrderDto {
  @ApiProperty({ example: '123 Main St, City' })
  @IsString()
  @IsDefined()
  deliveryAddress: string;

  @ApiProperty({ type: [OrderItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
