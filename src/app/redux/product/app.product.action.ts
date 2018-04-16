import { Action } from "@ngrx/store";
import { ProductState } from "../app.store";
import { IItemMenu, IUser, IProduct, IProductSale,IMonth } from "../app.interfaces";

export const GET_PRODUCTS_LIST = '[PRODUCTS] Get Products';
export const SET_PRODUCTS_LIST = '[PRODUCTS] Set Products';
export const GET_PRODUCTS_SALE_LIST = '[PRODUCTS] Get Products Sales';
export const SET_PRODUCTS_SALE_LIST = '[PRODUCTS] Set Products Sales';


export class GetProductListAction implements Action {
  readonly type=GET_PRODUCTS_LIST;


  constructor(){

  }
} 

export class SetProductListAction implements Action {
  readonly type=SET_PRODUCTS_LIST;
  public readonly payload:IProduct[];

  constructor(products:IProduct[]){
    this.payload=products;
  }
} 

export class GetProductSaleListAction implements Action {
  readonly type=GET_PRODUCTS_SALE_LIST;


  constructor(){

  }
} 

export class SetProductSaleListAction implements Action {
  readonly type=SET_PRODUCTS_SALE_LIST;
  public readonly payload:IProductSale[];

  constructor(products:IProductSale[]){
    this.payload=products;
  }
} 


export type ProductAction= 
GetProductListAction|
SetProductListAction|
GetProductSaleListAction|
SetProductSaleListAction