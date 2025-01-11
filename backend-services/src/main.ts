import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const configService = app.get(ConfigService);
  
  const port = configService.get<number>('port');
  
  const host = configService.get<string>('host');
  
  app.enableCors();
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))
  
  await app.listen(port, host);
}
bootstrap();
