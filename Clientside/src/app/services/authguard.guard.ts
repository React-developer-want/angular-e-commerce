import { CanActivateFn } from "@angular/router";
import { isSellerLoggedIn } from "./auth.service";


export const authGuard: CanActivateFn = (route, state) => {
  
  if(isSellerLoggedIn()) {
    return true;
  }
  return false;
}