import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SingleProductState, SingleProductStore } from './single-product.store';

@Injectable({ providedIn: 'root' })
export class SingleProductQuery extends QueryEntity<SingleProductState> {

  totalItems$ = this.select(state => state.totalItems); // Observable para total de itens unicos

  productTotalPrice$ = (id: string) => this.selectEntity(id, entity => entity?.totalPrice);

  productQuantity$ = (id: string) => this.selectEntity(id, entity => entity?.quantity);

  allProducts$ = this.selectAll();

  constructor(protected override store: SingleProductStore) {
    super(store);
  }
}