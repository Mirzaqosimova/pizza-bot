import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { corsOptions } from './shared/cors.options';
import { getBotToken } from 'nestjs-telegraf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const configService = app.get(ConfigService);

  app.enableCors(corsOptions);
  const bot = app.get(getBotToken());
  app.use(bot.webhookCallback('/bot'));
  await app.listen(configService.get<number>('PORT'));
}
bootstrap();
