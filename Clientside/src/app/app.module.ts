import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './My-Components/header/header.component';
import { SellerComponent } from './My-Components/seller/seller.component';
import { HomeComponent } from './My-Components/home/home.component';
import { LoginComponent } from './My-Components/login/login.component';
import { CartComponent } from './My-Components/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerComponent,
    HomeComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
