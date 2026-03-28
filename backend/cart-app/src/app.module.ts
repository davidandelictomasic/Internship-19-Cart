import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './module/user/user.module';
import { ProductsModule } from './module/products/products.module';
import { OrdersModule } from './module/orders/orders.module';
import { CategoryModule } from './module/category/category.module';

@Module({
  imports: [PrismaModule, UserModule, ProductsModule, OrdersModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
