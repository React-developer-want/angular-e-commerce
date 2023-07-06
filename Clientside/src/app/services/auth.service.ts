import axios from 'axios';
import { SellerSignup } from '../data-type';
import { environment } from 'src/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export const onSellerSignup = async (data:SellerSignup) => {
  return await axios.post(`${environment.apiUrl}/seller-auth`, { 
   ...data 
  });
};

export const isSellerLoggedIn = (): boolean => {
  return !!localStorage.getItem('sellerEmail');
};