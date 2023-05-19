// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactDetailComponent } from './contact-detail/contact-detail.component';
// import { ContactDetailResolver } from './resolver/contact-detail.resolver'
import { HomeComponent } from "./screens/home/home.component";
import { IdentityComponent } from "./screens/identity/identity.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { SignupFormComponent } from "./components/signup-form/signup-form.component";
import { HeaderComponent } from "./screens/header/header.component";
import { ProductsListComponent } from "./screens/products-list/products-list.component";
import { PersonalDataComponent } from "./screens/personal-data/personal-data.component";
import { UserInfoComponent } from "./screens/user-info/user-info.component";
import { WishlistComponent } from "./screens/wishlist/wishlist.component";
import { AddressListComponent } from "./screens/address-list/address-list.component";

const routes: Routes = [
  //  { path: '', redirectTo: '/language', pathMatch: 'full' },
  // {
  //   path: ':lang', component: CmsComponent,
  //   children: [
  { path: "", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: "scarpe", component: ProductsListComponent},
  {
    path: 'area-personale', component: UserInfoComponent,
    children: [
      { path: '', component: PersonalDataComponent },
      { path: 'indirizzi', component: AddressListComponent },
      { path: 'lista-desideri', component: WishlistComponent },
    ]
  },
  //     { path: '**', component: ErrorPageComponent },
  //     {
  //       path: 'scarpe', component: ProductsListComponent,
  //       children: [
  //         { path: ':uno', component: ProductsListComponent },
  //         { path: ':uno/:due', component: ProductsListComponent },
  //       ]
  //     },
  //     { path: 'ricerca', component: SearchComponent },
  //     { path: 'brand', component: BrandsComponent },
  //     { path: 'brand/:brand', component: ProductsListComponent },
  //     { path: 'scarpa/:id', component: SingleProductComponent },
  //     { path: 'carrello', component: CartComponent },
  //     {
  //       path: 'assistenza', component: CustomerCareComponent,
  //       children: [
  //         { path: 'contatti', component: ContactsComponent },
  //         { path: 'spedizioni', component: DeliveryComponent },
  //         { path: 'resi', component: ReturnAndRefundComponent },
  //         { path: 'faq', component: FaqComponent },
  //         { path: 'cookie-policy', component: CookieComponent },
  //         { path: 'termini-condizioni', component: TermsComponent },
  //         { path: 'resi', component: ReturnAndRefundComponent },
  //         { path: 'privacy-policy', component: PrivacyComponent },
  //       ]
  //     },
  //   ]
  // },
  // { path: ':lang/checkout', component: CheckoutComponent },
  {
    path: ":lang/accedi",
    component: IdentityComponent,
    children: [
      { path: "", component: LoginFormComponent },
      { path: "registrati", component: SignupFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
