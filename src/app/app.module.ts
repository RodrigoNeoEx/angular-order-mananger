import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Importa o módulo de rotas principal
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa o Firebase
    AngularFireAuthModule, // Adiciona o módulo de autenticação
  ],
  bootstrap: [AppComponent], // Componente inicial da aplicação
})
export class AppModule {}
