import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateCategoryDto {
    @ApiProperty()
    name: string;  

    
}
