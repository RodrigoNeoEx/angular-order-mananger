import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SingleProductState, SingleProductStore } from './single-product.store';
import { state } from '@angular/animations';

@Injectable({ providedIn: 'root' })
export class SingleProductQuery extends QueryEntity<SingleProductState> {

  totalItems$ = this.select(state => state.totalItems);

  productTotalPrice$ = (id: string) => this.selectEntity(id, entity => entity?.totalPrice);

  productQuantity$ = (id: string) => this.selectEntity(id, entity => entity?.quantity);

  allProducts$ = this.selectAll();

  constructor(protected override store: SingleProductStore) {
    super(store);
  }
}