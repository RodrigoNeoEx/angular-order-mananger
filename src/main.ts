import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableAkitaProdMode, akitaDevtools } from '@datorama/akita';

import { environment } from './environments/environment';

// Importação do Firebase
import firebase from 'firebase/compat/app';

// Inicialização explícita do Firebase
firebase.initializeApp(environment.firebaseConfig);

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode(); // Habilita o modo de produção
} else {
  akitaDevtools(); // Ferramentas de debug no modo de desenvolvimento
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

  