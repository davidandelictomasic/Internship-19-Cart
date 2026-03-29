import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('favorite')
export class FavoriteController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favorite.create({ data: createFavoriteDto });
  }

  @Get()
  @ApiOkResponse({description: 'List of all favorites', type: [CreateFavoriteDto]})
  findAll() {
   return this.prisma.favorite.findMany();
  }

  @Get(':id')
  @ApiOkResponse({description: 'The favorite has been successfully retrieved.', type: CreateFavoriteDto})
  findOne(@Param('id') id: string) {
    return this.prisma.favorite.findUnique({ where: { id: +id } });
  }

  @Delete(':id')
  @ApiOkResponse({description: 'The favorite has been successfully deleted.'})
  remove(@Param('id') id: string) {
    return this.prisma.favorite.delete({ where: { id: +id } });
  }
}
