import { Action } from "@ngrx/store";
import { UserState } from "../app.store";
import { IItemMenu, IUser, ICustomer,ICustomerAvailableProduct } from "../app.interfaces";

export const GET_CUSTOMERS_LIST = '[CUSTOMER] Get Customers';
export const SET_CUSTOMERS_LIST = '[CUSTOMER] Set Customers';
export const GET_CUSTOMER_AVAILABLE_PRODUCTS = '[CUSTOMER] Get Avaible Products by customer';
export const SET_CUSTOMER_AVAILABLE_PRODUCTS = '[CUSTOMER] Set Avaible Products by customer';

export class GetCustomerListAction implements Action {
  readonly type=GET_CUSTOMERS_LIST;


  constructor(){

  }
} 


export class SetCustomerListAction implements Action {
  readonly type=SET_CUSTOMERS_LIST;
 public readonly payload:ICustomer[];

  constructor(customers:ICustomer[]){
    this.payload=customers;
  }
} 


export class GetCustomerAvailableProductsAction implements Action {
  readonly type=GET_CUSTOMER_AVAILABLE_PRODUCTS;
  constructor(){

  }
} 

export class SetCustomerAvailableProductsAction implements Action {
  readonly type=SET_CUSTOMER_AVAILABLE_PRODUCTS;
 public readonly payload:ICustomerAvailableProduct[];

  constructor(customers:ICustomerAvailableProduct[]){
    this.payload=customers;
  }
} 

export type CustomerAction= 
GetCustomerListAction|
SetCustomerListAction|
GetCustomerAvailableProductsAction|
SetCustomerAvailableProductsAction
