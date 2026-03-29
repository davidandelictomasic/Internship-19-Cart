import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Category created.', type: CreateCategoryDto })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOkResponse({ description: 'List of all categories.', type: [CreateCategoryDto] })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Category details.', type: CreateCategoryDto })
  @ApiNotFoundResponse({ description: 'Category not found.' })
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Category deleted.' })
  @ApiNotFoundResponse({ description: 'Category not found.' })
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
