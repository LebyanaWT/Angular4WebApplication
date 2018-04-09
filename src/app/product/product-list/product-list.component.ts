import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductserviceService]
})
export class ProductListComponent implements OnInit {
  private products: Product[];
  constructor(private productservice:ProductserviceService,private domSanitizer: DomSanitizer,private route: ActivatedRoute,
    private router: Router) {
  
   }
  ngOnInit() {
    /*
    After the Login Success on the system the method getAllProducts is invoked initially* */
      this.getAllProducts();
  } 
  /*These method getAllProducts(),its a method which its role is to Inject the findAll() method from the Service Controller.
  *The method will be exercuted once the client has successfully login in to the system which will provide the products that are 
  *available to be purchased.
  */
  getAllProducts() {
    this.productservice.findAll().subscribe(
      products => {
        this.products = products;
        this.products.forEach(function(products) {
          if (products.image) {
            var ImageString = products.image.substring(products.image.indexOf(",") + 1 );
            products.image =  ImageString;
          }
        }); 
      },
      err => {
        console.log(err);
      }
    );
  }
/*
*These addToTrolley() is invoked immediately when the client clicks on Add to Trolley Button 
**/
  addToTrolley(product:Product){
    this.productservice.addToCart(product); 
  }
 /*
*These directToCheckOutPage() is invoked immediately when the client clicks on checkout button to navigate to the Checkoutform(HTML) 
**/
  directToCheckOutPage(){
    this.router.navigate(['checkout']);
  }

}
