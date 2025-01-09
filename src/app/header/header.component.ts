import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartQuery } from '../stores/cart/cart.query';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  user: string | null = "";
  totalItems$ = this.cartQuery.totalProducts$; // total de itens unicos adicionados ao carrinho
  totalPrice$ = this.cartQuery.select(state => state.totalPrice); // valor total de itens no carrinho
  isOnMenu: boolean = false; // verifica se esta na rota menu

    constructor(
      private cartQuery: CartQuery,
      private router: Router,
    ) {}
  
  onClick() {this.router.navigate(['/cart'])};
  
  welcomeText(): string { 
    const text = `Bem vindo ${this.user}`
    return text
  }
  

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user'); 
    this.isOnMenu = this.router.url === '/menu'; 
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.user = user.displayName ? user.displayName : "";
    } else {
      this.user = "";
    }    
  }
}
