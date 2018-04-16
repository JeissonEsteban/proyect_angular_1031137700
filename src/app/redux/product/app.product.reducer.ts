import { AppState,ProductState, ProductStateInit } from "../app.store";
import { GET_PRODUCTS_LIST,ProductAction, SET_PRODUCTS_LIST, SET_PRODUCTS_SALE_LIST, GET_PRODUCTS_SALE_LIST } from "./app.product.action";

export function productReducer(state:ProductState = ProductStateInit, action: ProductAction): ProductState {

    switch(action.type) {
      case GET_PRODUCTS_LIST: {
        return {...state};
      } 
      case SET_PRODUCTS_LIST: {
        return {...state,list:action.payload};
      } 
      case GET_PRODUCTS_SALE_LIST: {
        return {...state};
      } 
      case SET_PRODUCTS_SALE_LIST: {
        return {...state,sales:action.payload};
      } 
      default: {
        return state;
      }
    }	
  } 