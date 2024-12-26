import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartState extends EntityState<CartItem> {
  totalItems: number;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super({
      totalItems: 0,
      entities: {},
    });
  }

  // Adicionar item ao carrinho
  addItem(item: CartItem) {
    this.add(item); // Adiciona o item à store
    this.updateTotalItems();
  }

  // Remover item do carrinho
  removeItem(itemId: string) {
    this.remove(itemId); // Remove o item pelo ID
    this.updateTotalItems();
  }

  // Atualizar a quantidade de um item
  updateItemQuantity(itemId: string, quantity: number) {
    this.update(itemId, { quantity });
    this.updateTotalItems();
  }

  // Atualizar o total de itens
  private updateTotalItems() {
    const entities = this.getValue().entities || {}; // Obtém todos os itens como um objeto
    const total = Object.values(entities).reduce((sum, item: CartItem) => sum + (item.quantity || 0), 0);
    this.update({ totalItems: total }); // Atualiza o total de itens no estado
  }
  
}
