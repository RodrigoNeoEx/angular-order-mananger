import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from 'src/app/shared/shared.module'; 


@NgModule({
  declarations: [HomeComponent], // Declara o componente Home
  imports: [
    CommonModule,               // Importa recursos comuns (ngIf, ngFor)
    RouterModule.forChild([{ path: '', component: HomeComponent }]), // Define a rota da Home
    MatCardModule,              // Card do Angular Material
    MatToolbarModule,           // Toolbar do Angular Material
    MatButtonModule,            // Botões do Angular Material
    HeaderModule,
    SharedModule    
  ],
  exports: [HomeComponent]      // Exporta caso precise ser reutilizado
})

export class HomeModule {}
