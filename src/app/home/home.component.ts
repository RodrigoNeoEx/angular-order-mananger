import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../../services/google-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = this.googleAuthService.isAuthenticated();

  constructor(
    private googleAuthService: GoogleAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Verifica o estado inicial do login
    this.googleAuthService.isAuthenticated();
    

    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;

    // Atualiza a variável de controle sempre que o estado mudar
    this.googleAuthService.authStateChange.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;  
    });
  }

  loginWithGoogle() {
    this.googleAuthService.loginWithGoogle()
      .then(() => {
        this.isLoggedIn = true
        // this.router.navigate(['/menu'])
      }
      );
  }

  // logout() {
  //   this.googleAuthService.logout().then(() =>  this.isLoggedIn = false);
  // }
}
