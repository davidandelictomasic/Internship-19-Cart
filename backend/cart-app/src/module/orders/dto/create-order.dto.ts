import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    userId: number;

    @ApiProperty({ type: [Number] })
    productIds: number[];   

    @ApiProperty()
    deliveryAddress: string;

    @ApiProperty()
    totalAmount: number;

    @ApiProperty()
    status: string;

    

}
