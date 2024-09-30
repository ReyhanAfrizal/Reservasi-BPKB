import { ICustomer } from '../interfaces/i-customer';
import { IReservasi } from '../interfaces/i-reservasi';

export class Reservasi implements IReservasi {
  id: string = '';
  customer!: ICustomer;
  nomorKontrak: string = '';
  nomorBPKB: string = '';
  tipeKendaraan: string = '';
  jadwal: number = 0;
  real: number = 0;
  estimasi: number = 0;
}
