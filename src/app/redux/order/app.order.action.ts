import { Action } from "@ngrx/store";
import { IFilterOrder, IOrder } from "../app.interfaces";
import { IOffset } from "selenium-webdriver";

export const GET_ORDER_BYCUSTOMER = '[ORDER] Get orders by constumer';
export const SET_ORDER_BYCUSTOMER = '[ORDER] Set orders by constumer';

export class GetOrdersByCustomerAction implements Action {
  readonly type = GET_ORDER_BYCUSTOMER;
  public readonly payload:IFilterOrder
  constructor(filter:IFilterOrder)
  {
    this.payload=filter;
  }
}

export class SetOrdersByCustomerAction implements Action {
  readonly type = SET_ORDER_BYCUSTOMER;
  public readonly payload:IOrder[]
  constructor(orders:IOrder[])
  {
    this.payload=orders;
  }
}

export type OrderActions = 
GetOrdersByCustomerAction|
SetOrdersByCustomerAction