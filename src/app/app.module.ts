import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer.module';
import { enableProdMode } from '@angular/core';
import { CustomerService } from './customer-create/customer.service';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductserviceService } from './product/productservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeComponent,
    CheckoutComponent,
    AdminComponent,
    AlertComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [HttpModule,CustomerService,ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
