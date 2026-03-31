import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform: true, whitelist: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());


  const config = new DocumentBuilder()
    .setTitle('Cart API')
    .setDescription('All responses are wrapped in: { statusCode, message, data }')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
