import { AppState,CustomerState,CustomerStateInit } from "../app.store";
import { GET_CUSTOMERS_LIST,SET_CUSTOMERS_LIST,CustomerAction, SetCustomerListAction, GET_CUSTOMER_AVAILABLE_PRODUCTS, SET_CUSTOMER_AVAILABLE_PRODUCTS, SetCustomerAvailableProductsAction } from "./app.customer.action";
export function customerReducer(state:CustomerState = CustomerStateInit, action: CustomerAction): CustomerState {

    switch(action.type) {
      case GET_CUSTOMERS_LIST: {
        return {...state};
      } 
      case SET_CUSTOMERS_LIST: {
        return {...state,list:(action as SetCustomerListAction).payload};
      }    
      case GET_CUSTOMER_AVAILABLE_PRODUCTS: {
        return {...state};
      } 
      case SET_CUSTOMER_AVAILABLE_PRODUCTS: {
        return {...state,availableProducts:(action as SetCustomerAvailableProductsAction).payload};
      } 
      default: {
        return state;
      }
    }	
  } 