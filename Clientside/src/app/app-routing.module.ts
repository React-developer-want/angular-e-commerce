import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './My-Components/home/home.component';
import { SellerComponent } from './My-Components/seller/seller.component';
import { LoginComponent } from './My-Components/login/login.component';
import { CartComponent } from './My-Components/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'seller-auth', component: SellerComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
