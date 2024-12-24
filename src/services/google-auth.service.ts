import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; // Para compatibilidade
import 'firebase/compat/auth'; // Certifique-se de que o módulo auth é carregado
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GoogleAuthService {
  [x: string]: any;
  private userSubject = new BehaviorSubject<any | null>(null);
  user$: Observable<any | null> = this.userSubject.asObservable();
  private authStateSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  authStateChange: Observable<boolean> = this.authStateSubject.asObservable();


  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userSubject.next(user);
        this.authStateSubject.next(true); // Usuário logado
        localStorage.setItem('user', JSON.stringify(user)); // Salva no localStorage
      } else {
        this.userSubject.next(null); // Remove o usuário
        this.authStateSubject.next(false); // Usuário não logado
        localStorage.removeItem('user'); // Remove do localStorage
      }
    });
  }
  
  loginWithGoogle(): Promise<void> {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    
    return firebase.auth().signInWithPopup(provider)
      .then((result) => {
        if (result.user) {
          this.userSubject.next(result.user);
          this.authStateSubject.next(true);
          localStorage.setItem('user', JSON.stringify(result.user));
        }
      })
      .catch((error) => {
        console.error('Erro durante o login direto com Firebase:', error);
      });
  }  

  logout(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        this.userSubject.next(null);
        localStorage.removeItem('user');
      })
      .catch((error) => console.error('Erro ao deslogar:', error));
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value;
  }
}

