import { Injectable } from '@angular/core';
import { Action,Store} from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ChangeDefaultItemMenuAction,UserAction,CHANGE_SELECT_ITEM_MENU, LOGIN_USER, LoginUserAction, LOGIN_SUCCESS, LOGIN_FAIL, LoginUserSuccessAction, LoginUserFailAction, LogoutUserAction, LOGOUT_USER } from "./app.user.action";
import { AppState } from "./../app.store";
import 'rxjs/add/operator/do';

//services
import { GlobalService } from "./../../services/global.service";
import { UserService } from "./../../services/user.service";


//models
import { TokenModelOut } from '../../models/User';
import { ApiResponse, ResponseCode } from '../../models/ApiResponseModel';
import { IUser } from '../app.interfaces';
import { ERROR_HTTP_ACTION } from '../app.actions';

@Injectable()
export class UserEffects {

    @Effect()
    login$: Observable<UserAction> = this.actions$.pipe(
      ofType(LOGIN_USER),
      mergeMap(action =>{

        let payload=(action as LoginUserAction).payload;
       return this.userService.loginUser(payload).pipe(
          // If successful, dispatch success action with result
          map(data => {

            let ret = (data as ApiResponse<TokenModelOut>)
           
            if(ret.statusCode==ResponseCode.OK)
            {
                let user= payload;
                user.id=ret.data.userId;
                user.name=ret.data.userName;

                this.globalService.SetToken(ret.data.token);

                return new LoginUserSuccessAction(user);
            }
            else
            {
                return new LoginUserFailAction(ret.message);
            }
            }),
            catchError((error: Response | any)=>{
              
                if(error.error)
                {
                    let response=(error.error as ApiResponse<any>);
                    if(response.statusCode!==undefined)
                    {
                      let action = new LoginUserFailAction(response.message);
                      this.store.dispatch(action);
                    }
                    else{
                     
                      alert('Error. Tenemos problemas al conectarnos con el API.Por favor intenta más tarde.');
                      let action = new LoginUserFailAction('Error API');
                      this.store.dispatch(action);
                    }
                

                }
            
                return Observable.throw(error.message);
              })
            
      )})
    
    );

    @Effect()
    errorApi$: Observable<UserAction> = this.actions$.pipe(
      ofType(ERROR_HTTP_ACTION),
      map(action =>{
        return new LogoutUserAction();
      })
    )


    @Effect({dispatch:false})
    logout$: Observable<UserAction> = this.actions$.pipe(
      ofType(LOGOUT_USER),
      map(action =>{
            this.globalService.DeleteToken();
            location.href='/';
        return new LogoutUserAction();
      })
    )


    constructor(
        private actions$: Actions,
        private globalService:GlobalService,
        private userService:UserService,
        private store:Store<AppState>
    ) {}



}