import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSocialComponent } from './login-social/login-social.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginSocialComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LoginSocialComponent], // Exporta o LoginSocialComponent
})
export class SharedModule {}
