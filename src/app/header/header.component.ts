import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: string | null = "";

    constructor(

      private router: Router
    ) {}
  
  onClick() {this.router.navigate(['/cart'])};
  
  welcomeText(): string { 
    const text = `Bem vindo ${this.user}`
    return text
  } 

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user'); // Pega os dados do localStorage
    if (storedUser) {
      const user = JSON.parse(storedUser); // Converte para JSON
      this.user = user.displayName ? user.displayName : ""; // Acessa o displayName ou define como 'visitante'
    } else {
      this.user = "";
    }
  }
}
