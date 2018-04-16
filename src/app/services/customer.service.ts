import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//models
import { ICustomer } from "./../redux/app.interfaces";


//abstract
import { AbstractService } from "./abstract.service";

//services
import { GlobalService } from "./global.service";

@Injectable()
export class CustomerService extends AbstractService{



    constructor(
        private http:HttpClient,
        private globalService:GlobalService
    ){
        super();
    }


    public GetCustomers()
    {
        let optionHeader=this.GetHeaders(this.globalService.GetToken());

        return this.http.get(`${this.APIURL}/${this.CUSTOMER_METHOD}/list`,optionHeader);
    }


    public GetAvailableProducts()
    {
        let optionHeader=this.GetHeaders(this.globalService.GetToken());

        return this.http.get(`${this.APIURL}/${this.CUSTOMER_METHOD}/available_products`,optionHeader);
    }



}