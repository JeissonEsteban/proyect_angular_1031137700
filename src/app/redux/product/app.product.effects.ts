import { Injectable } from '@angular/core';
import { Action,Store} from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductAction, GET_PRODUCTS_LIST, SetProductListAction, GET_PRODUCTS_SALE_LIST, SetProductSaleListAction } from "./app.product.action";
import { AppState } from "./../app.store";
import 'rxjs/add/operator/do';

//services
import { GlobalService } from "./../../services/global.service";
import { ProductService } from "./../../services/product.service";


//models
import { TokenModelOut } from '../../models/User';
import { ApiResponse, ResponseCode } from '../../models/ApiResponseModel';
import { IUser, IProduct, IProductSale } from '../app.interfaces';
import { ResponseErrorAction } from '../app.actions';

@Injectable()
export class ProductEffects {

    @Effect()
    getProductList$: Observable<ProductAction> = this.actions$.pipe(
      ofType(GET_PRODUCTS_LIST),
      mergeMap(action =>{

       return this.productService.GetProducts().pipe(
          // If successful, dispatch success action with result
          map(data => {
          
            let ret = (data as ApiResponse<IProduct[]>)
        
            if(ret.statusCode==ResponseCode.OK)
            {
                return new SetProductListAction(ret.data);
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
    getProductSaleList$: Observable<ProductAction> = this.actions$.pipe(
      ofType(GET_PRODUCTS_SALE_LIST),
      mergeMap(action =>{

       return this.productService.GetSalesProduct().pipe(
          // If successful, dispatch success action with result
          map(data => {
          
            let ret = (data as ApiResponse<IProductSale[]>)
        
            if(ret.statusCode==ResponseCode.OK)
            {
                return new SetProductSaleListAction(ret.data);
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
        private productService:ProductService,
        private store:Store<AppState>
    ) {}



}