import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SellerComponent } from './pages/seller/seller.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { sellerDataReducer } from './services/store/reducers.service';
import { SellerAddProductComponent } from './pages/seller-add-product/seller-add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ sellerData: sellerDataReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
