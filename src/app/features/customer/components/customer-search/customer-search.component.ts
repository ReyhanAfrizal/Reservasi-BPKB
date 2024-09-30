import { Component } from '@angular/core';
import { CustomerService } from '../../../../cores/services/customer.service';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPagination } from '../../../../cores/interfaces/i-pagination';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.css',
})
export class CustomerSearchComponent {
  query: string = '';
  field: string = 'name';
  page: number = 1;

  icons = {
    search: faSearch,
  };

  constructor(private customerService: CustomerService) {}

  onSearch() {
    this.customerService
      .search(this.field, this.query, this.page)
      .subscribe((resp: IPagination<ICustomer[]>) => {
        this.customerService.customers = resp;
      });
  }
}
