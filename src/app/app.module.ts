import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./screens/home/home.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { IdentityComponent } from "./screens/identity/identity.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonComponent } from "./components/button/button.component";
import { InputTextFieldComponent } from "./components/input-text-field/input-text-field.component";
import { InputPasswordFieldComponent } from "./components/input-password-field/input-password-field.component";
import { MatSelectModule } from '@angular/material/select'; 
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    SignupFormComponent,
    IdentityComponent,
    ButtonComponent,
    InputTextFieldComponent,
    InputPasswordFieldComponent,
    // MatSelectModule
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,   MatFormFieldModule,
    MatInputModule, MatSelectModule, CommonModule,],
  providers: [MatFormFieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
