import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface SingleProduct {
  id: string;
  quantity: number;
  itemPrice: number;
  totalPrice: number;
}


export interface SingleProductState extends EntityState<SingleProduct> {
  totalItems: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'singleProduct' })
export class SingleProductStore extends EntityStore<SingleProductState, SingleProduct> {
  constructor() {
    super({
      totalItems: 0,
    });
  }

  /**
   * Incrementa a quantidade de um produto e atualiza seu total
   */
  incrementProduct(productId: string) {
    this.update(productId, entity => ({
      quantity: entity.quantity + 1,
      totalPrice: parseFloat(((entity.quantity + 1) * entity.itemPrice).toFixed(2)), // Atualiza o total diretamente
    }));
    this.updateTotalItems(); // Atualiza o total de itens na store
  }

  /**
   * Decrementa a quantidade de um produto e atualiza seu total
   */
  decrementProduct(productId: string) {
    this.update(productId, entity => ({
      quantity: entity.quantity > 0 ? entity.quantity - 1 : 0,
      totalPrice: entity.quantity > 0 
      ? parseFloat(((entity.quantity - 1) * entity.itemPrice).toFixed(2)) 
      : 0, // Evita valores negativos
    }));
    this.updateTotalItems(); // Atualiza o total de itens na store
  }

  /**
   * Atualiza o total de todos os produtos
   */
  updateTotalItems() {
    const entities = this.getValue().entities || {};
    const totalItems = Object.values(entities).reduce(
      (sum, entity: SingleProduct) => sum + entity.quantity,
      0
    );
    this.update({ totalItems });
  }
}
