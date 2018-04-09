import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductserviceService} from '../product/productservice.service'
import {Product} from '../product/product'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public productsInTrolley : Array<Product>;
  public cartTotalAmount : string;

  constructor(private route: ActivatedRoute,private service:ProductserviceService,
    private router: Router) { }

  ngOnInit() {
    /*
    *Loading an Array  with  CartList Array Data for the display on the View */
    this.productsInTrolley =  this.service.loadCart() ;
    /*
    *Retrieving the total Amount From the CartList Array */
    this.cartTotalAmount = this.service.calcTrolleyTotalAmount().toFixed(2);
  }
  
 
}
