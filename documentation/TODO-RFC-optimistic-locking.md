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

  private async getCode(): Promise<string> {
    const count = await this.shortenerModel.countDocuments();
    return this.toBase62(count);
  }

  private toBase62(num: number): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let base62 = '';
    while (num > 0) {
      base62 = chars[num % 62] + base62;
      num = Math.floor(num / 62);
    }
    return base62 || '0';
  }

  async create(createShortenerDto: CreateShortenerDto): Promise<IShortener> {
    const domain = this.configService.get<string>('domain');
    let shortener: IShortener;

    const maxRetries = 5;
    let attempt = 0;

    while (attempt < maxRetries) {
      attempt++;
      const code = await this.getCode();
      const short = domain + code;

      try {
        shortener = await this.shortenerModel.findOneAndUpdate(
          { code },
          {
            $setOnInsert: { url: createShortenerDto.url, code, short },
            $inc: { __v: 1 }
          },
          { new: true, upsert: true, rawResult: true }
        );

        if (shortener.lastErrorObject.updatedExisting) {
          // If the document already exists, retry with a new code
          continue;
        }

        return shortener.value;
      } catch (error) {
        if (error.code === 11000 && attempt < maxRetries) {
          // Handle duplicate key error by retrying
          continue;
        }
        throw error;
      }
    }

    throw new Error('Failed to create a unique shortener after multiple attempts.');
  }

  findAll() {
    return `This action returns all shortener`;
  }

  async findOne(code: string): Promise<any> {
    const shortener = await this.shortenerModel.findOne(
      { code },
      ['url', 'status', 'clicks']
    );

    if (!shortener) return ['Url do not exist.', null];

    if (shortener.status !== SHORTENER_STATUS.ACTIVE) return ['Url not active.', null];

    shortener.clicks++;
    shortener.save();

    return [null, { url: shortener.url }];
  }

  update(id: number, updateShortenerDto: UpdateShortenerDto) {
    return `This action updates a #${id} shortener`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortener`;
  }
}