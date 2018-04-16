import { AppState,UserState,UserStateInit } from "../app.store";
import { UserAction,ChangeDefaultItemMenuAction,CHANGE_SELECT_ITEM_MENU, LOGIN_USER, LOGOUT_USER, LoginUserAction, LOGIN_SUCCESS, LoginUserSuccessAction, LOGIN_FAIL, LoginUserFailAction } from "./app.user.action";
import { ERROR_HTTP_ACTION } from "../app.actions";
export function userReducer(state:UserState = UserStateInit, action: UserAction): UserState {

    switch(action.type) {
      case CHANGE_SELECT_ITEM_MENU: {
        let payload=(action as ChangeDefaultItemMenuAction).payload;
        return {...state,activeItem:payload};
      } 
      case LOGIN_USER: {
        let payload=(action as LoginUserAction).payload;
        return {...state,user:payload,userIsLogged:false};
      } 
      case LOGIN_SUCCESS: {
        let payload=(action as LoginUserSuccessAction).payload;
        return {...state,user:payload,userIsLogged:true,userloginMessage:''};
      } 
      case LOGIN_FAIL: {
        let payload = (action as LoginUserFailAction).payload;
        return {...state,user:{id:0,name:'',accessCode:'',password:''},userloginMessage:payload};
      } 
      case LOGOUT_USER: {
        return {...state,user:{id:0,name:'',accessCode:'',password:''}};
      } 
      case LOGOUT_USER: {
        return {...state,user:{id:0,name:'',accessCode:'',password:''}};
      } 
      case ERROR_HTTP_ACTION:{
        return {...state,userIsLogged:false};
      }
      default: {
        return state;
      }
    }	
  } 