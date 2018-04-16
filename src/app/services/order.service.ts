import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//models
import { IUser, IFilterOrder } from "./../redux/app.interfaces";


//abstract
import { AbstractService } from "./abstract.service";

//services
import { GlobalService } from "./global.service";

@Injectable()
export class OrderService extends AbstractService{



    constructor(
        private http:HttpClient,
        private globalService:GlobalService
    ){
        super();
    }


 
    public GetByCustomer(filter:IFilterOrder) {


        let optionHeader=this.GetHeaders(this.globalService.GetToken());
        return this.http.post(`${this.APIURL}/${this.ORDER_METHOD}/getbycustomer`,filter,optionHeader);
      }


}