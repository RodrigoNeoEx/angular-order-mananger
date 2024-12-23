import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
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
    return this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
      .then((result) => {
        console.log('Usuário Logado:', result.user);
        this.userSubject.next(result.user);
        localStorage.setItem('user', JSON.stringify(result.user));
      })
      .catch((error) => console.error('Erro no login:', error));
  }

  logout(): Promise<void> {
    return this.afAuth.signOut()
      .then(() => {
        console.log('Usuário deslogado');
        this.userSubject.next(null);
        localStorage.removeItem('user');
      })
      .catch((error) => console.error('Erro ao deslogar:', error));
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value;
  }
}

