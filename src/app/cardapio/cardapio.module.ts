import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CardapioComponent }]), // Define a rota do Cardápio
  ],
})
export class CardapioModule {}
