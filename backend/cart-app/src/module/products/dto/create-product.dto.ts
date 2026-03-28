import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
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

}
