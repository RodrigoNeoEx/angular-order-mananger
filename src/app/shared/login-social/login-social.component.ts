import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthService } from 'src/services/google-auth.service';

@Component({
  selector: 'app-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.scss']
})
export class LoginSocialComponent  implements OnInit {
  isLoggedIn: boolean = this.googleAuthService.isAuthenticated();

  constructor(
    private googleAuthService: GoogleAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.googleAuthService.isAuthenticated();
    const user = localStorage.getItem('user');
    this.isLoggedIn = !!user;
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

  logout() {
    this.googleAuthService.logout().then(() =>  this.isLoggedIn = false);
  } 

}
