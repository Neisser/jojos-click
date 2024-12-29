import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const port = process.env.PORT ?? 3000;

  const host = '0.0.0.0';

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))

  await app.listen(port, host);
}
bootstrap();
