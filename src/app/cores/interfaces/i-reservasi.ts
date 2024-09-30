import { ICustomer } from "./i-customer";

export interface IReservasi {
    id: string;
    customer: ICustomer;
    nomorKontrak: string;
    nomorBPKB: string;
    tipeKendaraan: string;
    jadwal: number;
    real: number;
    estimasi: number;
}
