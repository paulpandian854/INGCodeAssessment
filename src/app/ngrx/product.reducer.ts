import { ProductInterface } from './product.model';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const STORE_PRODUCT = 'STORE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProductReducer(state: ProductInterface, action: any) {
  switch (action.type) {
    case ADD_PRODUCT:
      let index = state.jwt.indexOf(action.payload.jwt[0]);
      if (index === -1) {
        return state = { name: 'addProduct', jwt: action.payload.jwt, cardDetails: action.payload.cardDetails }
      }
      return state;
    case REMOVE_PRODUCT:
      return {
        ...state,
        name: action.payload.name,
        jwt: [...state.jwt.filter(item => item !== action.payload.jwt[0])]
      };
    case STORE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
}