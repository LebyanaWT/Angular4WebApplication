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
  
  productsInCart : Product[] = new Array();
  cartTotal : Number = 0;
  totalAmount : Number;
  addToCart(product:Product):Product[]  {
    this.productsInCart.push(product);
    this.totalAmount = product.unitCost ;
    console.log("Total Amount :" + " "   + this.totalAmount);
    console.log("Trolley Items :" + "" + this.productsInCart.length);
    console.log(this.productsInCart);
   
    return this.productsInCart; 
  }
  

  storeCartItem(){
   
  }
}
