import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Resep } from './entity/resep.entity';
import { ResepDto } from './dto/resep.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ResepService {
  private _resep: Resep[] = [];

  async getResep(): Promise<Resep[]> {
    return this._resep;
  }

  async getResepById(id: string): Promise<Resep> {
    const resep = this._resep.find((r) => r.id === id);

    if (!resep) {
      throw new HttpException('Resep tidak ditemukan', HttpStatus.NOT_FOUND);
    }

    return resep;
  }

  async createResep(resep: ResepDto): Promise<void> {
    const resepEntity = { ...resep, id: uuidv4() };
    this._resep.push(resepEntity);
  }

  async updateDeskripsi(id: string, deskripsi: string): Promise<void> {
    const resepIndex = this._resep.findIndex((r) => r.id === id);

    if (resepIndex < 0) {
      throw new HttpException('Resep tidak ditemukan', HttpStatus.NOT_FOUND);
    }

    this._resep[resepIndex] = { ...this._resep[resepIndex], deskripsi };
  }

  async deleteResep(id: string): Promise<void> {
    this._resep = this._resep.filter((r) => r.id === id);
  }
}
