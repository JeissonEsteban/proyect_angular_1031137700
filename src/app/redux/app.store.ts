import { IUser,IItemMenu,IOrder,ICustomer,IProduct, IProductSale, IFilterOrder, ICustomerAvailableProduct } from "./app.interfaces";
import { isUndefined } from "util";


//STORE
export interface AppState {
	user: UserState;
	order:OrderState;
	customer:CustomerState;
	product:ProductState;
}
 
//STATES
export interface UserState{
	user:IUser;
	userloginMessage:string;
	userIsLogged :boolean;
	items:IItemMenu[];
	activeItem:IItemMenu;
}
export interface CustomerState{
	list:ICustomer[];
	availableProducts:ICustomerAvailableProduct[];
}
export interface ProductState{
	list:IProduct[];
	sales:IProductSale[];
}
export interface OrderState{
	list:IOrder[];
	filter:IFilterOrder
}



//INIT
export const UserStateInit:UserState={
	user:{name:'',accessCode:'',password:'',id:0},
	userloginMessage:'',
	userIsLogged:false,
	items:[
		{name:'Dashboard',route:'/dashboard'},
		{name:'Order report',route:'/order_report'},
	],
	activeItem:{name:'Dashboard',route:'/dashboard'}
};


export const CustomerStateInit:CustomerState={
	list:[],
	availableProducts:[]
}

export const ProductStateInit:ProductState={
	list:[],
	sales:[]
}

export const OrderStateInit:OrderState={
	list:[],
	filter:{
		customerId:0,
		startDate:new Date(),
		endDate:new Date()
	}
}
