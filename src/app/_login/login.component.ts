import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from '../customer-create/customer';
import {ActivatedRoute, Router} from '@angular/router';
import { CustomerService } from '../customer-create/customer.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  

})
export class LoginComponent implements OnInit {

  cust_id: number;
  customer: Customer;
  loginForm: FormGroup;
  private sub: any;
 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
  ) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.cust_id = params['cust_id'];
  });
  this.loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });
}
  

  onSubmit() {
    if (this.loginForm.valid) {
    
      this.redirectAdminPanelPage();
    }
  }

  redirectProductPage() {
    this.router.navigate(['product']);
  }
  redirectSignUpPage() {
    this.router.navigate(['register']);
  }
  redirectAdminPanelPage() {
    this.router.navigate(['admin']);
  }
  

}
