import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SellerLogin, SellerSignup } from 'src/app/data-type';
import { isSellerLoggedIn, onSellerLogin, onSellerSignup } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})

export class SellerComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  showSignUp: boolean = false;
  sellerLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router) {
    if(isSellerLoggedIn()){
      this.router.navigate(['seller-home']);
    }
  }

  toggleSignup() {
    this.showSignUp =!this.showSignUp;
  }

  onChangeName(value: string): void {
    if (value.length > 12) return;
    this.name = value;
  }

  onChangeEmail(value: string): void {
    if (value.length > 25) return;
    this.email = value;
  }

  onChangePassword(value: string): void {
    if (value.length > 8) return;
    this.password = value;
  }

  onSuccessAttempt(): void {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  async login(data: SellerLogin) {
    const response = await onSellerLogin(data);
    const status = response.data.status;
    if (status === 'success') {
      localStorage.setItem('sellerEmail', data.email);
      this.sellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    } else {
      console.log("Seller login failed");
    }
    this.onSuccessAttempt();
  }

  async signUp(data: SellerSignup) {
    const response = await onSellerSignup(data);
    const status = response.data.status;
    if (status === 'success') {
      localStorage.setItem('sellerEmail', data.email);
      this.sellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
    this.onSuccessAttempt();
  }
  
}
