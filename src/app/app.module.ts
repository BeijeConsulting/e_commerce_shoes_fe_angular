import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
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
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HeaderComponent } from "./screens/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SwiperModule } from "swiper/angular";
import { SliderHomepageComponent } from "./components/slider-homepage/slider-homepage.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatNativeDateModule } from "@angular/material/core";
import { BoxImageComponent } from "./components/box-image/box-image.component";
import { ProductsSliderComponent } from "./components/products-slider/products-slider.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/i18n/", ".json");
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
    HeaderComponent,
    SliderHomepageComponent,
    BoxImageComponent,
    ProductsSliderComponent,
    ProductCardComponent,
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatDatepickerModule,
    SwiperModule,
    MatTabsModule,
    MatNativeDateModule,
  ],
  providers: [MatFormFieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
