import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [
    MongooseModule.forRoot('credentials'),
    ShortenerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
