import { Component, OnInit } from '@angular/core';

import {Customer} from '../customer-create/customer';
import { CustomerService } from "../customer-create/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {
  private customers: Customer[];

  constructor(private customerService: CustomerService) { }

   //when component loading get all customers and set the customer[]
  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.customerService.findAll().subscribe(
      customers => {
        this.customers = customers;
      },
      err => {
        console.log(err);
      }
    );
  }
}
