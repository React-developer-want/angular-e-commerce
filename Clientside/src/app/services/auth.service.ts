import axios from 'axios';
import { SellerLogin, SellerSignup } from '../data-type';
import { environment } from 'src/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';

export const onSellerSignup = async (data:SellerSignup) => {
  return await axios.post(`${environment.apiUrl}/seller-auth/signup`, { 
   ...data 
  });
};

export const onSellerLogin = async (data:SellerLogin) => {
  return await axios.post(`${environment.apiUrl}/seller-auth/login`, { 
   ...data 
  });
};

export const isSellerLoggedIn = (): boolean => {
  return !!localStorage.getItem('sellerEmail');
};