import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private prisma: PrismaService) {}

  async add(userId: number, productId: number) {
    const existing = await this.prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    if (existing) throw new ConflictException('Product already in favorites');

    return this.prisma.favorite.create({
      data: { userId, productId },
      include: { product: true },
    });
  }

  findAllByUser(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: { product: true },
    });
  }

  async remove(userId: number, productId: number) {
    const favorite = await this.prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    if (!favorite) throw new NotFoundException('Favorite not found');

    return this.prisma.favorite.delete({
      where: { id: favorite.id },
    });
  }
}
