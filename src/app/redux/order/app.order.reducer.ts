import { AppState,OrderState,OrderStateInit } from "../app.store";
import { OrderActions, GET_ORDER_BYCUSTOMER,SET_ORDER_BYCUSTOMER } from "./app.order.action";

export function orderReducer(state:OrderState = OrderStateInit, action: OrderActions): OrderState {
    switch(action.type) {
      case GET_ORDER_BYCUSTOMER: {
        return {...state,filter:action.payload};
      }
      case SET_ORDER_BYCUSTOMER: {
        return {...state,list:action.payload};
      }
    
      default: {
        return state;
      }
    }	
  } 