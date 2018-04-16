import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { GlobalService } from "./global.service";

@Injectable()
export abstract class AbstractService {

    public APIURL:string=environment.WebApiServiceUrl;
    public AUTHENTICATION_METHOD='authentication';
    public CUSTOMER_METHOD='customer';
    public PRODUCT_METHOD='product';
    public ORDER_METHOD='order';


    constructor(
    ){

    }

    public GetHeaders(token:string){
      return {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
        })
      };
  }

    

}