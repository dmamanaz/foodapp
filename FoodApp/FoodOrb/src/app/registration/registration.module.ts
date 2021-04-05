import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent, ForgotPasswordComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
