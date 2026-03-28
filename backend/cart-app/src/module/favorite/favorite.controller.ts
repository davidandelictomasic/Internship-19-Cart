import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('favorite')
export class FavoriteController {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favorite.create({ data: createFavoriteDto });
  }

  @Get()
  findAll() {
   return this.prisma.favorite.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.favorite.findUnique({ where: { id: +id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prisma.favorite.delete({ where: { id: +id } });
  }
}
