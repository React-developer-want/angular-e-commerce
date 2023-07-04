import { Component } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent {
  name: String = '';
  email: String = '';
  password: String = '';
  onChangeName(value: string): void {
    if(value.length > 12) return;
    this.name = value;
  }
  onChangeEmail(value: string): void {
    if(value.length > 25) return;
    this.email = value;
  }
  onChangePassword(value: string): void {
    if(value.length > 8) return;
    this.password = value;
  }
  signUp(data: object): void {
    console.log({data});
    this.name = '';
    this.email = '';
    this.password = '';
  }
}
