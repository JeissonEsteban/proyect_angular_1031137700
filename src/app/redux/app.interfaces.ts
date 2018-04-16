export interface IUser{
    id:number;
    accessCode:string;
    password:string;
    name:string;
}



export interface IItemMenu{
    name:string;
    route:string;
}
export interface IOrderDetail{
   OrderDetailId:number;
   OrderId:number;
   CountSale:number;
   Price:number;
   DescriptionProduct:string;
   ProductId:number;
   ProductName:string;
}
export interface IOrder{
    orderId:number;
    orderDate:Date;
    deliveryAddress:string;
    customerId:number;
    customerName:string;
    state:number;
    stateName:string;
    deliveryDate:Date;
    totalPrice:number;
    orderDetails:IOrderDetail[];
}

export interface ICustomer{
    id:number;
    name:string;
    mail:string;
    state:number;
    ordersCount:number;
    productsCount:number;
    priceTotal:number;
}
export interface ICustomerAvailableProduct{
    id:number;
    name:string;
    numberProductsAvaible:number;
}

export interface IProduct{
    id:number;
    name:string;
    state:number;
    countSale:number;
    totalPrice:number;
}
export interface IProductSale{
    yearNumber:number;
    monthNumber:number;
    id:number;
    name:string;
    countSale:number;
    totalPrice:number;
    percentPrice:number;
}

export interface IMonth{
    id:number;
    name:string;
}

export interface IFilterOrder{
    customerId:number,
	startDate:Date,
	endDate:Date
}