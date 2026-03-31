import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../../../generated/prisma/client';

export class UpdateOrderDto {
  @ApiProperty({ required: false, example: '456 New St, City' })
  @IsString()
  @IsOptional()
  deliveryAddress?: string;

  @ApiProperty({ required: false, enum: OrderStatus, example: 'CONFIRMED' })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
}
