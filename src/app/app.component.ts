import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;
  title = 'angular-order-manager';

  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user; // Usuário logado
        console.log('Usuário Logado:', user);
      } else {
        this.user = null; // Nenhum usuário logado
        console.log('Usuário não logado');
      }
    });
  }
}
