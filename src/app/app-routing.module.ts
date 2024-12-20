import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // Home
  { path: 'menu', loadChildren: () => import('./cardapio/cardapio.module').then(m => m.CardapioModule) }, // Cardápio
  { path: '**', redirectTo: '' }, // Redireciona para Home caso rota não exista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
