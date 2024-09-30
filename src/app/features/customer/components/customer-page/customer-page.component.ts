import { Component } from '@angular/core';

import { IPagination } from '../../../../cores/interfaces/i-pagination';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.css',
})
export class CustomerPageComponent {
  page: number = 1;
  query: string = '';
  constructor(private customerService: CustomerService) {}

  onPaginateCustomer(data: number) {
    console.log(typeof data);
    this.customerService
      .all(data, this.query)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }

  get customers(): IPagination<ICustomer[]> {
    return this.customerService.customers;
  }
}
