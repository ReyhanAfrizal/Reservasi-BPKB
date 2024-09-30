import { Component } from '@angular/core';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { Reservasi } from '../../../../cores/models/reservasi';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservasi-create',
  templateUrl: './reservasi-create.component.html',
  styleUrl: './reservasi-create.component.css',
})
export class ReservasiCreateComponent {
  icons = {
    save: faSave,
    stop: faTrash,
  };

  time = { hour: 8, minute: 30 };
  dateNow: number = Date.now();

  constructor(private reservasiService: ReservasiService) {}

  get reservasi() {
    return this.reservasiService.reservasi;
  }

  set reservasi(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  onCreate() {
    this.reservasiService.create(this.time).subscribe((resp: IReservasi) => {});
  }

  onGetReservation(data: IReservasi) {
    this.reservasiService.reservasi = data;
  }

  whenReservationValid(timestamp: number) {
    let dateNow: number = Date.parse(new Date().toISOString().split('T')[0]);
    let reservationSchedule: number = Date.parse(
      new Date(timestamp).toISOString().split('T')[0]
    );

    if (reservationSchedule > dateNow) {
      return true;
    }

    return false;
  }

  onRemove() {
    this.reservasiService.remove(this.reservasi.id).subscribe((resp: any) => {
      this.reservasiService.reservasi = new Reservasi();
    });
  }
}
