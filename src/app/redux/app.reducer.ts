import { ActionReducerMap } from "@ngrx/store";
import { AppState, UserStateInit } from "./app.store";
import { userReducer } from "./user/app.user.reducer";
import { orderReducer } from "./order/app.order.reducer";
import { productReducer } from "./product/app.product.reducer";
import { customerReducer } from "./customer/app.customer.reducer";

export const reducers: ActionReducerMap<AppState> = {
    user:userReducer,
    order:orderReducer,
    product:productReducer,
    customer:customerReducer
}; 