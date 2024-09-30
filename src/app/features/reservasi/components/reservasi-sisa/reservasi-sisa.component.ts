import { Component, Input } from '@angular/core';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { Reservasi } from '../../../../cores/models/reservasi';

@Component({
  selector: 'app-reservasi-sisa',
  templateUrl: './reservasi-sisa.component.html',
  styleUrl: './reservasi-sisa.component.css',
})
export class ReservasiSisaComponent {
  @Input() reservasi: IReservasi = new Reservasi();
}
