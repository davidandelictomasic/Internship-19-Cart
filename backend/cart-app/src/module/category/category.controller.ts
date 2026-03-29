import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOkResponse({ description: 'The category has been successfully created.', type: CreateCategoryDto })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOkResponse({description: 'List of all categories', type: [CreateCategoryDto]})
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: 'The category has been successfully retrieved.', type: CreateCategoryDto}) 
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  

  @Delete(':id')
  @ApiOkResponse({description: 'The category has been successfully deleted.'})
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
