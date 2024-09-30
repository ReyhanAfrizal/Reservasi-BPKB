import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css',
})
export class CustomerDetailComponent {
  @Input()
  customer!: ICustomer;
  @Input()
  check: Boolean = true;

  icons = {
    choose: faArrowRightToBracket,
  };

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi() {
    this.reservasiService.customer = this.customer;
  }

  getStatus(status: string): string {
    if (status === 'macet') {
      return 'text-bg-danger';
    } else if (status === 'lunas') {
      return 'text-bg-success';
    } else {
      return 'text-bg-primary';
    }
  }
}
