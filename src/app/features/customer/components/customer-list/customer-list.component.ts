import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';
import { IPagination } from '../../../../cores/interfaces/i-pagination';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  page: number = 1;
  query: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.all().subscribe((resp: IPagination<ICustomer[]>) => {
      this.customerService.customers = resp;
    });
  }

  get customers(): IPagination<ICustomer[]> {
    return this.customerService.customers;
  }
}
