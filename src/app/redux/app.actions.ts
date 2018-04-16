import { Action } from "@ngrx/store";

export * from './user/app.user.action';

export const ERROR_HTTP_ACTION='[HTTP] Error response';

export class ResponseErrorAction implements Action {
    readonly type:string=ERROR_HTTP_ACTION;
    public readonly payload:string;
    
    constructor(msg:string){
        this.payload=msg;
    }
  } 
  