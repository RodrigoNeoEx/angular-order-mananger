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

@Injectable({ providedIn: 'root'})
@StoreConfig({ name: "singleProduct" })

export class SingleProductStore extends EntityStore<SingleProductState, SingleProduct> {
  constructor() {
    super({
      totalItems: 0,
    });
  }


  sumCounter(productId: string) {
    this.update(productId, entity => ({
      quantity: entity.quantity + 1,
    }));
  }
  
  
  subtractionCounter(productId: string) {
    this.update(productId, entity => ({
      quantity: entity.quantity > 0 ? entity.quantity - 1 : 0,
    }));
  }
  

  updateTotalPrice(productId: string) {
    this.update(productId, entity => ({
      totalPrice: entity.quantity * entity.itemPrice,
    }));
  }
  
  
  updateTotalItems() {
    const entities = this.getValue().entities || {};
    const totalItems = Object.values(entities).reduce(
      (sum, entity: SingleProduct) => sum + entity.quantity,
      0
    );
    this.update({ totalItems });
  }
  
  incrementProduct(productId: string) {
    this.sumCounter(productId); // Incrementa a quantidade
    this.updateTotalPrice(productId); // Atualiza o preço total do produto
  }
  
  decrementProduct(productId: string) {
    this.subtractionCounter(productId); // Decrementa a quantidade
    this.updateTotalPrice(productId); // Atualiza o preço total do produto
  }
    

}