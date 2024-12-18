import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent], // Declara o componente Home
  imports: [
    CommonModule,               // Importa recursos comuns (ngIf, ngFor)
    MatToolbarModule,           // Toolbar do Angular Material
    MatCardModule,              // Card do Angular Material
    MatButtonModule,            // Botões do Angular Material
    RouterModule                // Para usar routerLink
  ],
  exports: [HomeComponent]      // Exporta caso precise ser reutilizado
})
export class HomeModule {}
