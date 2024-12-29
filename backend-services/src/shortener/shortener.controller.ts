import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { CreateShortenerDto } from './dto/create-shortener.dto';
import { UpdateShortenerDto } from './dto/update-shortener.dto';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async create(@Body() createShortenerDto: CreateShortenerDto) {
    return this.shortenerService.create(createShortenerDto);
  }

  @Get()
  findAll() {
    return this.shortenerService.findAll();
  }

  @Get(':code')
  async findOne(@Res() res, @Param('code') code: string) {
    const [error, results] = await this.shortenerService.findOne(code);

    if(error) return res.status(400).send({message: error});

    return res.status(200).send({message: 'ok', data: results})
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortenerDto: UpdateShortenerDto) {
    return this.shortenerService.update(+id, updateShortenerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortenerService.remove(+id);
  }
}
