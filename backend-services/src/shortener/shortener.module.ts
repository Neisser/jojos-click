import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShortenerService } from './shortener.service';
import { ShortenerController } from './shortener.controller';
import { Shortener, shortenerSchema } from './schemas/shortener.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Shortener.name, schema: shortenerSchema }])
  ],
  controllers: [ShortenerController],
  providers: [ShortenerService],
  exports: [ShortenerService]
})
export class ShortenerModule {}
