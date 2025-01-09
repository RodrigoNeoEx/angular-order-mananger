import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartStore } from './cart.store';
import { TotalInCart } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<TotalInCart> {
  // Observable para o total de produtos únicos no carrinho
  totalProducts$ = this.select(state => state.totalProducts);

  // Observable para o preço total do carrinho
  totalPrice$ = this.select(state => state.totalPrice);

  // Observable para a lista de produtos no carrinho
  products$ = this.select(state => state.products);

  hasProductsInCart$ = this.select(state => state.products.length > 0);

  constructor(protected override store: CartStore) {
    super(store);
  }

  getAllProducts() {
    return this.getValue().products;
  }

  getTotalProducts() {
    return this.getValue().totalProducts;
  }

  getTotalPrice() {
    return this.getValue().totalPrice;
  }
}
