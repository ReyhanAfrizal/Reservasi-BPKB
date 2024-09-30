import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReservasi } from '../interfaces/i-reservasi';
import { Reservasi } from '../models/reservasi';
import { ICustomer } from '../interfaces/i-customer';
import { environment } from '../../../environments/environment.development';
import { Observable, BehaviorSubject } from 'rxjs';
import { IPagination } from '../interfaces/i-pagination';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})
export class ReservasiService {
  private _reservasi: IReservasi = new Reservasi();
  private _reservations: IPagination<IReservasi[]> = new Pagination<
    IReservasi[]
  >();

  constructor(private http: HttpClient) {}

  get reservasi(): IReservasi {
    return this._reservasi;
  }

  set reservasi(data: IReservasi) {
    this._reservasi = data;
  }

  get reservations(): IPagination<IReservasi[]> {
    return this._reservations;
  }

  set reservations(data: IPagination<IReservasi[]>) {
    this._reservations = data;
  }

  set customer(data: ICustomer) {
    this._reservasi.customer = data;
  }

  public all(
    page: number = 1,
    query: string = ''
  ): Observable<IPagination<IReservasi[]>> {
    return this.http.get<IPagination<IReservasi[]>>(
      `${environment.BASE_URL2}/reservasi?customer.name=${query}&_page=${page}&_per_page=5`
    );
  }

  create(time: {
    hour: string | number;
    minute: string | number;
  }): Observable<IReservasi> {
    let { id, ...payload } = { ...this._reservasi };

    payload.jadwal = Date.parse(
      payload.jadwal.toString() + ` ${time.hour}:${time.minute}`
    );

    let body: string = JSON.stringify(payload);

    return this.http.post<IReservasi>(
      `${environment.BASE_URL2}/reservasi`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  remove(id: number | string) {
    return this.http.delete<IReservasi>(
      `${environment.BASE_URL2}/reservasi/${id}/`
    );
  }
}
