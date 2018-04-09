import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from '../customer-create/customer';
import { CustomerService } from '../customer-create/customer.service';


import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  cust_id: number;
  customer: Customer;
  customerForm: FormGroup;
  private sub: any;
 
 
  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService){}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      this.cust_id = params['cust_id'];
    });
    this.customerForm = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      username : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  /*
  *The register() Method, its purpose is to add a new Client to the Sytem database before getting any interaction with the 
  full Sytem functionalities e.g Login,view Products List etc
  ** */
  register() {
    if (this.customerForm.valid) {
      if (this.cust_id) {
          let customer: Customer = new Customer(
          this.customerForm.controls['firstname'].value,
          this.customerForm.controls['lastname'].value,
          this.customerForm.controls['email'].value,
          this.customerForm.controls['username'].value, 
          this.customerForm.controls['password'].value);
          console.log(customer);
          alert("Register");
      } else {
        let customer: Customer = new Customer(
          this.customerForm.controls['firsstname'].value,
          this.customerForm.controls['lastname'].value,
          this.customerForm.controls['email'].value,
          this.customerForm.controls['username'].value
        , this.customerForm.controls['password'].value);
        console.log(customer);
        alert("Register");
        this.customerService.saveUser(customer).subscribe();
      }
      this.customerForm.reset();
      this.router.navigate(['login']);
    }
  }
  /*
  *These method directs to the Login Page on successful Registration for new client* */
  redirectLoginPage() {
    this.router.navigate(['customer']);
  }

}
