import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MenuService } from 'src/services/menu.service';
import { CartStore } from '../stores/cart/cart.store';
import { SingleProductStore } from '../stores/item/single-product.store';
import { SingleProductQuery } from '../stores/item/single-product.query';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export class CardapioComponent {
  readonly panelOpenState = signal(false);
  expansionIcon: string = this.panelOpenState() ? "keyboard_arrow_down" : "keyboard_arrow_up"

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
    private singleProductQuery: SingleProductQuery
  ) {}

  addToProduct(item: any) {
    const existingProduct = this.singleProductQuery.getEntity(item.id);
  
    if (!existingProduct) {
      // Adiciona o produto à store com quantidade inicial = 1
      this.singleProductStore.add({
        id: item.id,
        quantity: 1, // Começa com 1 no primeiro clique
        itemPrice: item.price,
        totalPrice: item.price, // Total inicial = preço unitário
      });
      console.log(item)
    } else {
      // Incrementa a quantidade do produto
      this.singleProductStore.sumCounter(item.id);
      console.log(item)
    }
  }
  

  removeFromProduct(itemId: string) {
    const existingProduct = this.singleProductQuery.getEntity(itemId);

    if (existingProduct) {
      if (existingProduct.quantity > 1) {
        // Decrementa a quantidade do produto
        this.singleProductStore.subtractionCounter(itemId);
      } else {
        // Remove o produto da store quando a quantidade for 1 e o usuário clicar para remover
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


  ngOnInit(): void {
    this.expansionMenus = this.menuService.getExpansionMenus();

    this.menuData['Menu de Entradas'] = this.menuService.getEntradas();
    this.menuData['Pratos Principais'] = this.menuService.getPrincipais();
    this.menuData['Massas'] = this.menuService.getMassas();
    this.menuData['Carnes'] = this.menuService.getCarnes();
    this.menuData['Peixes'] = this.menuService.getPeixes();
    this.menuData['Sobremesas'] = this.menuService.getSobremesas();
    this.menuData['Bebidas'] = this.menuService.getBebidas();
  }  
}
