import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ResepService } from './resep.service';
import { ResepDto } from './dto/resep.dto';
import { UpdateDeskripsiDto } from './dto/update-deskripsi.dto';

@Controller('resep')
export class ResepController {
  constructor(private readonly resepService: ResepService) {}

  @Get()
  async getResep() {
    return this.resepService.getResep();
  }

  @Get('/:id')
  async getResepById(@Param('id') id: string) {
    return this.resepService.getResepById(id);
  }

  @Post()
  async createResep(@Body() resepDto: ResepDto) {
    return this.resepService.createResep(resepDto);
  }

  @Patch('/:id')
  async updateDeskripsi(
    @Body() { deskripsi }: UpdateDeskripsiDto,
    @Param('id') id: string,
  ) {
    return this.resepService.updateDeskripsi(id, deskripsi);
  }

  @Delete('/:id')
  async deleteResep(@Param('id') id: string) {
    return this.resepService.deleteResep(id);
  }
}
