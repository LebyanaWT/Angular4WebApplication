import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './_login/login.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import {CheckoutComponent} from './checkout/checkout.component'
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: CustomerCreateComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/product-add', component: ProductAddComponent},
  {path : 'checkout',component: CheckoutComponent},
  {path : 'admin' , component : AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
