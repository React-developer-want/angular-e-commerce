import { Component } from '@angular/core';
import { SellerSignup } from 'src/app/data-type';
import { onSellerSignup } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent {
  name: string = '';
  email: string = '';
  password: string = '';

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

  async signUp(data: SellerSignup) {
    const response = await onSellerSignup(data);
    const { status } = response.data;
    if(status === 'success') {
      localStorage.setItem('sellerEmail', data.email);
    }
    this.onSuccessAttempt();
  }
}
