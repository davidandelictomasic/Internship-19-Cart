import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './config/prisma.module';
import { UserModule } from './modules/user/user.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CategoryModule } from './modules/category/category.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, ProductsModule, OrdersModule, CategoryModule, FavoriteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
