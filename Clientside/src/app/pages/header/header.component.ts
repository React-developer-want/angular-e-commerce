import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getSellerData, isSellerLoggedIn } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { setSellerData } from 'src/app/services/store/actions.service';
import { SellerData } from 'src/app/data-type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

@Injectable({ providedIn: 'root' })

export class HeaderComponent {
  headerTitle= "ECOMM";
  cartItemsCount = 5;
  menuType: string = 'default';
  sellerDetails$ = this.store.select((state: any) => state.sellerData);
  seller = { name: '' };

  ngOnInit() {
    this.sellerDetails$.subscribe((sellerDetails: SellerData) => {
      this.seller = sellerDetails;
    });
  }
 
  constructor(private router: Router, private store: Store) {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        if(isSellerLoggedIn() && val.url.includes('seller')){
          this.menuType = 'seller';
          this.fetchSellerDetails();
        }else{
          this.menuType = 'default';
        }
      }
    })
  }

  async fetchSellerDetails() {
    if(this.menuType == 'seller'){
      const email = localStorage.getItem('sellerEmail') || '';
      const result = await getSellerData(email);
      this.store.dispatch(setSellerData({sellerData :result.data.body}));
    }
  }

  onLogoutSeller() {
    localStorage.removeItem('sellerEmail');
    this.router.navigate(['seller-auth']);
  }
}
