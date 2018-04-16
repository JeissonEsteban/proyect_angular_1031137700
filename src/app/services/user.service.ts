import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//models
import { IUser } from "./../redux/app.interfaces";


//abstract
import { AbstractService } from "./abstract.service";

//services
import { GlobalService } from "./global.service";
import { ApiResponse } from '../models/ApiResponseModel';
import { TokenModelOut } from '../models/User';

@Injectable()
export class UserService extends AbstractService{



    constructor(
        private http:HttpClient,
        private globalService:GlobalService
    ){
        super();
    }


 

      public loginUser(user:IUser):Observable<any> {
        return this.http.post(`${this.APIURL}/${this.AUTHENTICATION_METHOD}/login`,user);
      }


}