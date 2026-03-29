import { Controller, Get, Post, Param, Delete, Req } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post(':productId')
  @ApiCreatedResponse({ description: 'Product added to favorites.' })
  @ApiConflictResponse({ description: 'Product already in favorites.' })
  add(@Req() req, @Param('productId') productId: string) {
    return this.favoriteService.add(req.user.id, +productId);
  }

  @Get()
  @ApiOkResponse({ description: 'List of user favorites.' })
  findAll(@Req() req) {
    return this.favoriteService.findAllByUser(req.user.id);
  }

  @Delete(':productId')
  @ApiOkResponse({ description: 'Product removed from favorites.' })
  @ApiNotFoundResponse({ description: 'Favorite not found.' })
  remove(@Req() req, @Param('productId') productId: string) {
    return this.favoriteService.remove(req.user.id, +productId);
  }
}
