import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class Product {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  brand?: string;

  @ApiProperty()
  category?: string;

  @ApiProperty()
  size?: string;

  @ApiProperty()
  color?: string;

  @ApiProperty()
  posterUrl?: string;

  @ApiProperty()
  isAvailable?: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
