import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "./../../redux/app.store";
import { ICustomer, IProductSale, ICustomerAvailableProduct } from "./../../redux/app.interfaces";
import { GetCustomerListAction } from '../../redux/customer/app.customer.action';
import { Router } from '@angular/router';
import { GetProductListAction, GetProductSaleListAction } from '../../redux/product/app.product.action';
import 'hammerjs';

@Component({
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public customerData:ICustomer[];
  public productSaleData:IProductSale[];
  public seriesData: ICustomerAvailableProduct[];


  constructor(
    private store:Store<AppState>,
    private router:Router
  ) {
    //styles
    document.body.style.background="white";

    //store
    this.SuscribeCustomer();
    this.SuscribeProduct();

  }

  ngOnInit() {
     this.LoadDataCustomers();
     this.LoadDataProductsSales();
  }

  private SuscribeCustomer()
  {
    this.store.select('customer').subscribe(customerState=>{
      this.customerData=customerState.list;
      this.seriesData=customerState.availableProducts;
    });
  }
  private SuscribeProduct()
  {
    this.store.select('product').subscribe(productState=>{
      this.productSaleData=productState.sales;
    

    });
  }
  private LoadDataCustomers()
  {
    let action = new GetCustomerListAction();
    this.store.dispatch(action);
  }
  private LoadDataProductsSales()
  {
    let action = new GetProductSaleListAction();
    this.store.dispatch(action);
  }

}
