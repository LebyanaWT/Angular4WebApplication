import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';

function type(action) {
  return action;
}
export const ActionTypes = {
  SEARCH:           type('[Cart] Search'),
  SEARCH_COMPLETE:  type('[Cart] Search Complete'),
  LOAD:             type('[Cart] Load'),
  SELECT:           type('[Cart] Select'),
  ADD_TO_CART:      type('[Cart] Add'),
  REMOVE_FROM_CART:      type('[Cart] Remove'),
};

@Injectable()
export class CartService {

  constructor() { }

}
