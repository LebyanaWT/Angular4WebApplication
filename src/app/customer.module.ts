import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './_login/login.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,  FormsModule,    
    ReactiveFormsModule,
  ],
  declarations: [CustomerListComponent, CustomerCreateComponent, LoginComponent]
})
export class CustomerModule { }
