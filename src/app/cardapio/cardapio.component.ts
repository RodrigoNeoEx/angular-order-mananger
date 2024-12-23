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

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.expansionMenus = this.menuService.getExpansionMenus()
  }  
}
