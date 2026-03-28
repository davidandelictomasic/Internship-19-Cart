import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './module/user/user.module';
import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [PrismaModule, UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
