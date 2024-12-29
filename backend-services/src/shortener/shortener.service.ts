import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateShortenerDto } from './dto/create-shortener.dto';
import { UpdateShortenerDto } from './dto/update-shortener.dto';
import { IShortener } from './entities/shortener.entity';
import { Shortener } from './schemas/shortener.schema';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectModel(Shortener.name) private readonly shortenerModel: Model<IShortener>
  ) {}

  async create(createShortenerDto: CreateShortenerDto): Promise<IShortener> {

    const code = Date.now();

    const short = 'http://localhost:3000/' + code;

    const shortener = new this.shortenerModel({
      url: createShortenerDto.url,
      code,
      short,
    });

    return await shortener.save()
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
