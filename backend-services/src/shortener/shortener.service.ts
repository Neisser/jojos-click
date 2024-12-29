import { Injectable } from '@nestjs/common';

import { CreateShortenerDto } from './dto/create-shortener.dto';
import { UpdateShortenerDto } from './dto/update-shortener.dto';
import { Shortener } from './entities/shortener.entity';

@Injectable()
export class ShortenerService {
  async create(createShortenerDto: CreateShortenerDto): Promise<Shortener> {

    const shortener = createShortenerDto.url;

    return {
      url: shortener,
    };
  }

  findAll() {
    return `This action returns all shortener`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortener`;
  }

  update(id: number, updateShortenerDto: UpdateShortenerDto) {
    return `This action updates a #${id} shortener`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortener`;
  }
}
