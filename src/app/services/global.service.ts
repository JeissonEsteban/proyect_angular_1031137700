import { Injectable } from '@angular/core';
import { IItemMenu } from '../redux/app.interfaces';

@Injectable()
export class GlobalService {

  [x: string]: any;
    public listItems:IItemMenu[];
    public defaultItem: IItemMenu;
    constructor(){
      
    }

    /*Public Methods */
    public DeleteToken(): any {
        localStorage.clear();
    }
    public SetToken(token:string)
    {
        localStorage.setItem('_token',token);
    }

    public GetToken():string
    {
        return localStorage.getItem('_token');
    }

    public LoadUrl(currentUrl:string)
    {
        if(currentUrl=='dashboard')
        {
            this.listItems=[
                {name:'Order Report',route:'/order_report'}
              ];
    
              
              this.defaultItem={name:'Dashboard',route:'/dashboard'};
        }
        else
        {
            this.listItems=[
                {name:'Dashboard',route:'/dashboard'}
              ];
    
              
              this.defaultItem={name:'Order Report',route:'/order_report'};
        }
    }
    /*End Public Methods */
}