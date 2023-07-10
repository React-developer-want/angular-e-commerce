import { createAction, props } from '@ngrx/store';
import { SellerData } from 'src/app/data-type';

export const setSellerData = createAction('setSellerData', props<{ sellerData:SellerData }>());
