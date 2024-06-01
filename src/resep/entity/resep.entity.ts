import { Satuan } from '../dto/resep.dto';

export class Resep {
  id: string;
  deskripsi: string;
  bahan: Bahan[];
}

export class Bahan {
  nama: string;
  satuan: Satuan;
  jumlah: number;
}
