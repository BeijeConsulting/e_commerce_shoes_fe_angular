import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


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
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

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
    FooterComponent,
    // MatSelectModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatIconModule,
  ],
  providers: [MatFormFieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('instagram', domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/icons/instagram.svg"));
    matIconRegistry.addSvgIcon('youtube', domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/youtube.svg'));
    matIconRegistry.addSvgIcon('facebook', domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/facebook.svg'));
  }
}
