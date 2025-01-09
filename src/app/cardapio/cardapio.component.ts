import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MenuService } from 'src/services/menu.service';
import { SingleProductStore } from '../stores/item/single-product.store';
import { SingleProductQuery } from '../stores/item/single-product.query';
import { CartStore } from '../stores/cart/cart.store';
import { ProductsInCart } from '../stores/cart/cart.store';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})

export class CardapioComponent {
  readonly panelOpenState = signal(false);
  expansionIcon: string = this.panelOpenState() ? "keyboard_arrow_down" : "keyboard_arrow_up"
  openPanelIndex: number | null = null;

  expansionMenus: any[] = [];
  entradas: any[] = [];
  pratosPrincipais: any[] = [];
  massas: any[] = [];
  carnes: any[] = [];
  peixes: any[] = [];
  sobremesas: any[] = [];
  bebidas: any[] = [];

  menuData: { [key: string]: any[] } = {};  

  


  constructor(
    private menuService: MenuService,
    private singleProductStore: SingleProductStore,
    private singleProductQuery: SingleProductQuery,
    private cartStore: CartStore,
    private router: Router
  ) {}

  
  setOpenPanel(index: number) {
    this.openPanelIndex = index;
  }
  
  addToProduct(item: any) {
    const existingProduct = this.singleProductQuery.getEntity(item.id);
  
    if (!existingProduct) {
      this.singleProductStore.add({
        id: item.id,
        quantity: 1, 
        itemPrice: item.price,
        totalPrice: item.price,
      });
    } else {
      this.singleProductStore.incrementProduct (item.id);
    }
  }
  

  removeFromProduct(itemId: string) {
    const existingProduct = this.singleProductQuery.getEntity(itemId);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        this.singleProductStore.decrementProduct(itemId);
      } else {
        this.singleProductStore.remove(itemId);
      }
    }
  }

  getProductQuantity(productId: string): number {
    const product = this.singleProductQuery.getEntity(productId);
    return product ? product.quantity : 0;
  }

  getProductTotalPrice(productId: string): number {
    const product = this.singleProductQuery.getEntity(productId);
    return product ? product.totalPrice : 0;
  }

  addToCart(item: any) {
    console.log(item)
    const product: ProductsInCart = {
      id: item.id,
      name: item.id,
      quantity: 1,
      price: item.price,
    };

    this.cartStore.addProduct(product); // Adiciona o produto à store do carrinho
  }


  ngOnInit(): void {
    this.expansionMenus = this.menuService.getExpansionMenus();

    this.menuData['Menu de Entradas'] = this.menuService.getEntradas();
    this.menuData['Pratos Principais'] = this.menuService.getPrincipais();
    this.menuData['Massas'] = this.menuService.getMassas();
    this.menuData['Carnes'] = this.menuService.getCarnes();
    this.menuData['Peixes'] = this.menuService.getPeixes();
    this.menuData['Sobremesas'] = this.menuService.getSobremesas();
    this.menuData['Bebidas'] = this.menuService.getBebidas();   

    this.singleProductQuery
    .selectAll()
    .pipe(
      map((products) =>
        products.map((product) => ({
          id: product.id,
          name: product.id ?? 'Produto sem nome', // Ajuste para garantir o campo `name`
          quantity: product.quantity,
          price: product.itemPrice,
        }))
      )
    )
    .subscribe((productsInCart) => {
      this.cartStore.updateCartFromProducts(productsInCart);
    });
  }

  onClick() {this.router.navigate(['/cart'])};
}

