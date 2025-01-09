import { Injectable } from '@angular/core';
import { StoreConfig, EntityStore } from '@datorama/akita';
import { SingleProductStore } from '../item/single-product.store';

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
  constructor(private singleProduct: SingleProductStore) {
    super({
      products: [],
      totalProducts: 0,
      totalPrice: 0,
    });
  }

// Adiciona e atualiza um produto do carrinho
  addProduct(product: ProductsInCart) {
    const currentState = this.getValue();

    const productsCopy = [...currentState.products];

    const existingProductIndex = productsCopy.findIndex(p => p.id === product.id);

    if (existingProductIndex > -1) {
      productsCopy[existingProductIndex] = {
        ...productsCopy[existingProductIndex],
        quantity: productsCopy[existingProductIndex].quantity + product.quantity,
      };
    } else {
      productsCopy.push(product);
    }


    this.update({
      products: productsCopy,
      totalProducts: productsCopy.length,
      totalPrice: this.calculateTotalPrice(productsCopy),
    });

    this.singleProduct.syncFromCart(productsCopy);
  }

  // Remove e atualiza um produto do carrinho
  removeProduct(productId: string) {
    const currentState = this.getValue();

    const productsCopy = currentState.products.filter(product => product.id !== productId);

    this.update({
      products: productsCopy,
      totalProducts: productsCopy.length,
      totalPrice: this.calculateTotalPrice(productsCopy),
    });

    this.singleProduct.syncFromCart(productsCopy);
  }

  // Calcula e atualiza (adicionados) produtos unicos no carrinho
  incrementProductQuantity(productId: string) {
    const currentState = this.getValue();
    const productsCopy = currentState.products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  
    this.update({
      products: productsCopy,
      totalProducts: productsCopy.length,
      totalPrice: this.calculateTotalPrice(productsCopy),
    });

    this.singleProduct.syncFromCart(productsCopy);
  }
  
  // Calcula e atualiza  produtos unicos (removidos) no carrinho
  decrementProductQuantity(productId: string) {
    const currentState = this.getValue();    

    const productsCopy = currentState.products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
  
    this.singleProduct.syncFromCart(productsCopy);
  
    const filteredProducts = productsCopy.filter(product => product.quantity > 0);
  
    this.update({
      products: filteredProducts,
      totalProducts: filteredProducts.length,
      totalPrice: this.calculateTotalPrice(filteredProducts),
    });
  }
  
  
  
  // Calcula o preço total do carrinho  
  private calculateTotalPrice(products: ProductsInCart[]): number {
    return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  // Atualiza o carrinho com base nos produtos
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
