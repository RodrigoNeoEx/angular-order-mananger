import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { MenuService } from 'src/services/menu.service';


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

  constructor(private menuService: MenuService) {}

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
