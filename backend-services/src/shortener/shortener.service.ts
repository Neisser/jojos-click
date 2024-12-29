import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

import { CreateShortenerDto } from './dto/create-shortener.dto';
import { UpdateShortenerDto } from './dto/update-shortener.dto';
import { IShortener } from './entities/shortener.entity';
import { Shortener, SHORTENER_STATUS } from './schemas/shortener.schema';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectModel(Shortener.name) private readonly shortenerModel: Model<IShortener>,
    private readonly configService: ConfigService
  ) {}

  async create(createShortenerDto: CreateShortenerDto): Promise<IShortener> {
    const domain = this.configService.get<string>('domain');

    const code = Date.now();

    const short = domain + code;

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

  async findOne(code: string): Promise<any> {
    
    // TODO: create new statistic activity

    const shortener = await this.shortenerModel.findOne(
      { code },
      ['url', 'status', 'clicks']
    )

    if(!shortener) return ['Url do not exist.', null];

    if(shortener.status !== SHORTENER_STATUS.ACTIVE) return ['Url not active.', null]
      
    shortener.clicks ++;

    shortener.save()

    return [null, { url: shortener.url }];
  }

  update(id: number, updateShortenerDto: UpdateShortenerDto) {
    return `This action updates a #${id} shortener`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortener`;
  }
}
