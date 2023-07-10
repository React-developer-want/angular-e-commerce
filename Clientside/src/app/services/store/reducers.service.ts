import { createReducer, on } from "@ngrx/store";
import { setSellerData } from "./actions.service";

export const initialState = {
  name: '',
  email: ''
};

export const sellerDataReducer = createReducer(
  initialState,
  on(setSellerData, (state, {sellerData})=> {
    return { ...state, ...sellerData }
  }),
)