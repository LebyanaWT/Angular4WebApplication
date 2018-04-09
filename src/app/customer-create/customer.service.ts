import { Injectable } from '@angular/core';
import { Customer } from "../customer-create/customer";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CustomerService {
  private apiUrl = 'http://localhost:8081/api/customers/all';
  private createRestServiceUrl = 'http://localhost:8081/api/register';
  

  constructor(private http: Http) {
  }

  findAll(): Observable<Customer[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
  }

  saveUser(customer: Customer): Observable<Customer> {
   return this.http.post(this.createRestServiceUrl, customer)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  


 

}
