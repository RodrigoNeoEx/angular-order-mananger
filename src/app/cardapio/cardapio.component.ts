import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardapioComponent {
  readonly panelOpenState = signal(false);

  expansionIcon: string = this.panelOpenState() ? "keyboard_arrow_down" : "keyboard_arrow_up"
}
