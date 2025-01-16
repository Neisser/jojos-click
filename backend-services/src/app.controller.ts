import { Controller, Get, Param, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ShortenerService } from './shortener/shortener.service';

@Controller()
export class AppController {
  constructor(private readonly shortenerService: ShortenerService, private readonly configService: ConfigService) {}

  @Get(':code')
  async findOne(@Res() res, @Param('code') code: string) {
    const web = this.configService.get<string>('web');;

    if(code === web) return res.status(500).send({message: 'Error: Please open the url in a different tab.'});

    if(!code) return res.status(301).redirect(web);

    const [error, results] = await this.shortenerService.findOne(code);

    if(error) return res.status(400).send({message: error});

    return res.status(301).redirect(results.url);
  }
}
