export enum ResponseCode{ERROR=0,OK,NOT_RESULT}

export class ApiResponse<T>{
    statusCode:ResponseCode;
    data:T;
    message:string;

    constructor(){
        this.statusCode=ResponseCode.ERROR;
    }
}