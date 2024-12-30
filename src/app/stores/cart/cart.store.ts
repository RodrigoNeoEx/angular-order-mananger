import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

export interface ProductsInCart {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface TotalInCart {
  products: ProductsInCart[]; // Lista de produtos no carrinho
  totalProducts: number; // Quantidade total de produtos únicos
  totalPrice: number; // Soma total dos preços dos produtos
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends EntityStore<TotalInCart> {
  constructor() {
    super({
      products: [],
      totalProducts: 0,
      totalPrice: 0,
    });
  }

  /**
   * Adiciona um produto ao carrinho
   */
  addProduct(product: ProductsInCart) {
    const currentState = this.getValue();

    // Cria uma cópia dos produtos para evitar alterações diretas no estado
    const productsCopy = [...currentState.products];

    // Verifica se o produto já existe no carrinho
    const existingProductIndex = productsCopy.findIndex(p => p.id === product.id);

    if (existingProductIndex > -1) {
      // Atualiza a quantidade do produto existente
      productsCopy[existingProductIndex] = {
        ...productsCopy[existingProductIndex],
        quantity: productsCopy[existingProductIndex].quantity + product.quantity,
      };
    } else {
      // Adiciona o novo produto
      productsCopy.push(product);
    }

    // Atualiza o estado com os produtos atualizados
    this.update({
      products: productsCopy,
      totalProducts: productsCopy.length,
      totalPrice: this.calculateTotalPrice(productsCopy),
    });
  }

  /**
   * Remove um produto do carrinho
   */
  removeProduct(productId: string) {
    const currentState = this.getValue();

    // Cria uma nova lista de produtos sem o produto removido
    const productsCopy = currentState.products.filter(product => product.id !== productId);

    // Atualiza o estado com os produtos restantes
    this.update({
      products: productsCopy,
      totalProducts: productsCopy.length,
      totalPrice: this.calculateTotalPrice(productsCopy),
    });
  }

  /**
   * Calcula o preço total do carrinho
   */
  private calculateTotalPrice(products: ProductsInCart[]): number {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  /**
 * Atualiza o carrinho com base nos produtos
 */
updateCartFromProducts(products: ProductsInCart[]) {
  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  this.update({
    products,
    totalProducts,
    totalPrice,
  });
}

}
