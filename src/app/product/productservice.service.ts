import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductserviceService {

  private productsUrl = 'http://localhost:8081/api/products/all';
  constructor(private http:Http) { }

  /**Method which accesses the Rest Url to get all the list of product from mysql db* */
  findAll(): Observable<Product[]>  {
    return this.http.get(this.productsUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  // private addProdUrl = 'http://localhost:8081/api/addProduct';
  // addProduct(product: Product): Observable<Product> {
  //   return this.http.post(this.addProdUrl, product)
  //      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  //  }

   _url: string;
  uploadProduct(data: any): Observable<Product> {
      this._url = 'http://localhost:8081/api/addProduct';
      return this.http.post(this._url, data)
          .map(this.handleData)
          .catch(this.handleError);
  }
  private handleData(res: Response) {
    let data = res.json();
    return data;
  }
  private handleError(error: Response | any) {
    return Observable.throw('API failed');
  }
  
  productsInTrolley : Product[] = [];
  prodUnitCost : Number;
  total_Cart_Amount : Number = 0;
  quantity : Number = 1;

  addToCart(product:Product):Array<Product>  {
    this.productsInTrolley.push(product);
    this.prodUnitCost = product.unitCost ;

    var x = document.getElementById("cartButton");

 
      this.saveCart();
 
   
    
    return  this.productsInTrolley;
  }
  /*
  *These is a method (saveCart()) which only stores the Products Selected to Cart
   in a localstorage to be used later when About to place the order and editting the Product on cart
   */
  saveCart(){
    localStorage.setItem('items_in_cart', JSON.stringify( this.productsInTrolley));
    this.productsInTrolley = JSON.parse(localStorage.getItem('items_in_cart'));  
  }
/*
*A method (loadCart()) loading the Shopping Cart List Initially when the checkout button is clicked by the client
* */
  loadCart():Array<Product>{
    this.productsInTrolley = JSON.parse(localStorage.getItem('items_in_cart') );
    return this.productsInTrolley;
  }
/*
*A method (calcTrolleyTotalAmount())responsible for the calculation of the total Amount of all products in Shopping Cart List 
*/ 
  calcTrolleyTotalAmount() : Number{
    /*
    *Loading the Shopping Cart List to use for the calculation of the Total Amount  */
    this.productsInTrolley = this.loadCart();
    this.total_Cart_Amount  = 0
    /*
    *Looping through the entire List to get the unitCost of each product added in Shopping cart List to accumulate the total
    * */
    for ( var i = 0; i < this.productsInTrolley.length; i++){
      this.total_Cart_Amount =  49.99 ;
        sessionStorage.setItem('total-cost', JSON.stringify(this.total_Cart_Amount ));
    } 
    /*
    *Returning the amount of all the products */
    return this.total_Cart_Amount ;
  }
}
