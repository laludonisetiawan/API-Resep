export class ResepDto {
  deskripsi: string;
  bahan: BahanDto[];
}

export class BahanDto {
  nama: string;
  satuan: Satuan;
  jumlah: number;
}

export enum Satuan {
  MILILITER = 'mililiter',
  LITER = 'liter',
  GRAM = 'gram',
  KILOGRAM = 'kilogram',
  SENDOK = 'sendok',
  GELAS = 'gelas',
  POTONGAN = 'potongan',
}
