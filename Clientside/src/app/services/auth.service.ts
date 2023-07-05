import axios from 'axios';
// import { Injectable } from '@angular/core';
import { SellerSignup } from '../data-type';
import { environment } from 'src/environment';

// @Injectable({
//   providedIn: 'root'
// })

export const onSellerSignup = async (data:SellerSignup) => {
  return await axios.post(`${environment.apiUrl}/seller-auth`, { 
   ...data 
  });
};

export const isSellerLoggedIn = (): boolean => {
  return !!localStorage.getItem('sellerEmail');
};
