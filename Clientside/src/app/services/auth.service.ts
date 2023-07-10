import axios from 'axios';
import { SellerLogin, SellerSignup } from '../data-type';
import { environment } from 'src/environment';

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

export const getSellerData = async (email: string) => {
  return await axios.get(`${environment.apiUrl}/seller?email=${email}`);
}

export const isSellerLoggedIn = (): boolean => {
  return !!localStorage.getItem('sellerEmail');
};