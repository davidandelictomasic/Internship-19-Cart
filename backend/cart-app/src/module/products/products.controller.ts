import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOkResponse({ description: 'The product has been successfully created.', type: CreateProductDto })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({description: 'List of all products', type: [CreateProductDto]})
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: 'The product has been successfully retrieved.', type: CreateProductDto})
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({description: 'The product has been successfully updated.', type: CreateProductDto})
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Put(':id')
  @ApiOkResponse({description:'The product has been updated', type: CreateProductDto})
  updateField(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({description: 'The product has been successfully deleted.'})
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
