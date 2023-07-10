import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SellerComponent } from './pages/seller/seller.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { SellerHomeComponent } from './pages/seller-home/seller-home.component';
import { authGuard } from './services/authguard.guard';
import { SellerAddProductComponent } from './pages/seller-add-product/seller-add-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'seller-auth', component: SellerComponent
  },
  {
    path: 'seller-home', component: SellerHomeComponent, canActivate: [authGuard]
  },
  {
    path: 'seller-add-product', component: SellerAddProductComponent, canActivate: [authGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '*', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
