import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerCreateComponent } from '../customer-create/customer-create.component';
import { LoginComponent } from '../_login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

import {CheckoutComponent} from '../checkout/checkout.component'

const routes: Routes = [
  {path: 'customer', component: CustomerListComponent},
  {path: 'register', component: CustomerCreateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product/product-list', component: ProductListComponent},
  {path: 'product/product-add', component: ProductAddComponent},
  {path : 'checkout',component: CheckoutComponent} 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
