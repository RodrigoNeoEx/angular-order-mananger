import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart: string = "cart clicado";
  user: string | null = "";
  
  
  
  welcomeText(): string { 
    const text = `Bem vindo ${this.user}`
    return text
  }
   
  onClick():void {console.log(this.user)}


  ngOnInit(): void {
    const storedUser = localStorage.getItem('user'); // Pega os dados do localStorage
    if (storedUser) {
      const user = JSON.parse(storedUser); // Converte para JSON
      this.user = user.displayName ? user.displayName : ""; // Acessa o displayName ou define como 'visitante'
    } else {
      this.user = "";
    }

    console.log(this.user)
  }

}
