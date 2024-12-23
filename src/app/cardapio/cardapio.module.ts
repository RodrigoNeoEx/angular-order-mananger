import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderModule } from '../header/header.module';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    HeaderModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: CardapioComponent }]), // Define a rota do Cardápio
  ],
})
export class CardapioModule {  
  
}

