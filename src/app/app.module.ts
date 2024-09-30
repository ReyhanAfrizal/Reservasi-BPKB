import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BerkasComponent } from './berkas/berkas.component';
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component';
import { NavigationComponent } from './shared/products/components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './features/todos/component/todos/todos.component';
import { TodoDetailComponent } from './features/todos/component/todo-detail/todo-detail.component';
import { TodoFormComponent } from './features/todos/component/todo-form/todo-form.component';
import { TodoListComponent } from './features/todos/component/todo-list/todo-list.component';
import { TodoTotalComponent } from './features/todos/component/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { UserComponent } from './features/users/component/user/user.component';
import { CustomerService } from './cores/services/customer.service';
import { CustomerChoiceComponent } from './features/customer/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/customer/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/customer/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/customer/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasi/components/reservasi-create/reservasi-create.component';
import { ReservasiChoiceComponent } from './features/reservasi/components/reservasi-choice/reservasi-choice.component';
import { ReservasiDetailComponent } from './features/reservasi/components/reservasi-detail/reservasi-detail.component';
import { ReservasiListComponent } from './features/reservasi/components/reservasi-list/reservasi-list.component';
import { ReservasiSearchComponent } from './features/reservasi/components/reservasi-search/reservasi-search.component';
import { ReservasiSisaComponent } from './features/reservasi/components/reservasi-sisa/reservasi-sisa.component';
import { CustomerPageComponent } from './features/customer/components/customer-page/customer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BerkasComponent,
    ProductDetailComponent,
    NavigationComponent,
    TodoComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTotalComponent,
    AttrDirective,
    UserComponent,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiChoiceComponent,
    ReservasiDetailComponent,
    ReservasiListComponent,
    ReservasiSearchComponent,
    ReservasiSisaComponent,
    CustomerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [TodoService, UserService, CustomerService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
