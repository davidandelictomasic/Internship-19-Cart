import { Controller, Get, Post, Param, Delete, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { ApiBearerAuth, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserAuthGuard } from '../auth/user-auth.guard';

@ApiTags('Favorites')
@UseGuards(UserAuthGuard)
@ApiBearerAuth()
@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post(':productId')
  @ApiCreatedResponse({ description: 'Product added to favorites.' })
  @ApiConflictResponse({ description: 'Product already in favorites.' })
  add(@Req() req, @Param('productId', ParseIntPipe) productId: number) {
    return this.favoriteService.add(req.user.id, productId);
  }

  @Get()
  @ApiOkResponse({ description: 'List of user favorites.' })
  findAll(@Req() req) {
    return this.favoriteService.findAllByUser(req.user.id);
  }

  @Delete(':productId')
  @ApiOkResponse({ description: 'Product removed from favorites.' })
  @ApiNotFoundResponse({ description: 'Favorite not found.' })
  remove(@Req() req, @Param('productId', ParseIntPipe) productId: number) {
    return this.favoriteService.remove(req.user.id, productId);
  }
}
