import { Component, ViewContainerRef } from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {Product} from '../app/product/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public shoppingCartItems$: Observable<Product[]>;
  constructor(
    ) {
    
  }
  

       
}
