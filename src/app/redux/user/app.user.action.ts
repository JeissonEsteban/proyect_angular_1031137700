import { Action } from "@ngrx/store";
import { UserState } from "../app.store";
import { IItemMenu, IUser } from "../app.interfaces";

export const CHANGE_SELECT_ITEM_MENU = '[MENU] Change item selected';
export const LOGIN_USER='[USER] Login';
export const LOGIN_SUCCESS='[USER] Login Correct!';
export const LOGIN_FAIL='[USER] Login Fail';
export const LOGOUT_USER='[USER] LogOut';


export class ChangeDefaultItemMenuAction implements Action {
  readonly type=CHANGE_SELECT_ITEM_MENU;
  public readonly payload:IItemMenu;

  constructor(itemMenu:IItemMenu){
    this.payload=itemMenu;
  }
} 
export class LoginUserAction implements Action {
  readonly type:string=LOGIN_USER;
  public readonly payload:IUser;

  constructor(accessCode:string,password:string){
    this.payload={id:0,name:'',accessCode:accessCode,password:password};

  }
} 
export class LoginUserSuccessAction implements Action {
  readonly type:string=LOGIN_SUCCESS;
  public readonly payload:IUser;

  constructor(user:IUser){
    this.payload=user;

  }
} 
export class LoginUserFailAction implements Action {
  readonly type:string=LOGIN_FAIL;
  public readonly payload:string;

  constructor(message:string){
    this.payload=message;
  }
} 
export class LogoutUserAction implements Action {
  readonly type:string=LOGOUT_USER;
  
  constructor(){

  }
} 

export type UserAction= ChangeDefaultItemMenuAction|LoginUserAction|LogoutUserAction;