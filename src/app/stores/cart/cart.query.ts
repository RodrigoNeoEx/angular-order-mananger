import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {
  totalItems$ = this.select(state => state.totalItems); // Observable para o total de itens

  constructor(protected override store: CartStore) {
    super(store);
  }
}
