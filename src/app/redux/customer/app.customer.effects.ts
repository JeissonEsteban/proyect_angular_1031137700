import { Injectable } from '@angular/core';
import { Action,Store} from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomerAction, GET_CUSTOMERS_LIST, SetCustomerListAction, SetCustomerAvailableProductsAction } from "./app.customer.action";
import { AppState } from "./../app.store";
import 'rxjs/add/operator/do';

//services
import { GlobalService } from "./../../services/global.service";
import { CustomerService } from "./../../services/customer.service";


//models
import { TokenModelOut } from '../../models/User';
import { ApiResponse, ResponseCode } from '../../models/ApiResponseModel';
import { IUser, ICustomer, ICustomerAvailableProduct } from '../app.interfaces';
import { ResponseErrorAction } from '../app.actions';

@Injectable()
export class CustomerEffects {

    @Effect()
    getCustomersList$: Observable<CustomerAction> = this.actions$.pipe(
      ofType(GET_CUSTOMERS_LIST),
      mergeMap(action =>{

       return this.customerService.GetCustomers().pipe(
          // If successful, dispatch success action with result
          map(data => {

            let ret = (data as ApiResponse<ICustomer[]>)

            if(ret.statusCode==ResponseCode.OK)
            {
               

                return new SetCustomerListAction(ret.data);
            }
            else
            {
                return new ResponseErrorAction(ret.message);
            }
            }),
            catchError((error: Response | any)=>{

                if(error.error)
                {
                    let response=(error.error as ApiResponse<any>);
                    let action = new ResponseErrorAction(response.message);
                    this.store.dispatch(action);

                }
            
                return Observable.throw(error.message);
              })
            
      )})
    
    );


    @Effect()
    getCustomersAvailableProducts$: Observable<CustomerAction> = this.actions$.pipe(
      ofType(GET_CUSTOMERS_LIST),
      mergeMap(action =>{

       return this.customerService.GetAvailableProducts().pipe(
          // If successful, dispatch success action with result
          map(data => {

            let ret = (data as ApiResponse<ICustomerAvailableProduct[]>)

            if(ret.statusCode==ResponseCode.OK)
            {
               

                return new SetCustomerAvailableProductsAction(ret.data);
            }
            else
            {
                return new ResponseErrorAction(ret.message);
            }
            }),
            catchError((error: Response | any)=>{

                if(error.error)
                {
                    let response=(error.error as ApiResponse<any>);
                    let action = new ResponseErrorAction(response.message);
                    this.store.dispatch(action);

                }
            
                return Observable.throw(error.message);
              })
            
      )})
    
    );

    constructor(
        private actions$: Actions,
        private globalService:GlobalService,
        private customerService:CustomerService,
        private store:Store<AppState>
    ) {}



}