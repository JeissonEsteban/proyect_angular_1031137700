import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "./../../redux/app.store";
import { ICustomer, IProductSale, ICustomerAvailableProduct, IOrder } from "./../../redux/app.interfaces";
import { GetCustomerListAction } from '../../redux/customer/app.customer.action';
import { Router } from '@angular/router';
import { GetProductListAction, GetProductSaleListAction } from '../../redux/product/app.product.action';
import 'hammerjs';
import { FormControl, FormGroup,Validators  } from '@angular/forms';
import { GetOrdersByCustomerAction } from '../../redux/order/app.order.action';


@Component({
  selector: 'page-orderReport',
  templateUrl: './orderReport.component.html',
  styleUrls:['./orderReport.component.scss']
})
export class OrderReportComponent implements OnInit {

  public formOrderFilter:FormGroup;


  public customerList:ICustomer[];
  public orderData:IOrder[];
  public startMinDate: Date = new Date(2018, 0, 1);
  public startMaxDate: Date = new Date();
  public endMinDate: Date = new Date(2018, 0, 1);
  public endMaxDate: Date = new Date();


  constructor(
    private store:Store<AppState>,
    private router:Router
  ) {
    //styles
    document.body.style.background="white";

    //store
    this.SuscribeCustomer();
    this.SuscribeOrder();


     //forms
     this.formOrderFilter= new FormGroup({
      customer:new FormControl({},[Validators.required]),
      startValueDate:new FormControl(null,[Validators.required ]),
      endValueDate:new FormControl(null,[Validators.required ])
    });


    //
    this.formOrderFilter.valueChanges.subscribe(()=>{
        this.ChangeMaxDate();
    });

  }

  ngOnInit() {
     this.LoadDataCustomers();

  }


  private SuscribeCustomer()
  {
    this.store.select('customer').subscribe(customerState=>{
      this.customerList=customerState.list;
    });
  }

  private SuscribeOrder()
  {
    this.store.select('order').subscribe(orderState=>{
      this.orderData=orderState.list;
    });
  }


  private LoadDataCustomers()
  {
    let action = new GetCustomerListAction();
    this.store.dispatch(action);
  }

  private ChangeMaxDate(){
    
    let _date:Date=this.formOrderFilter.value['startValueDate'];
    
    if(_date===undefined || _date==null || _date.toString()=='')
    {
      return;
    }
    this.endMaxDate.setDate(_date.getDate());
    this.endMaxDate.setMonth(_date.getMonth()+1);
    this.endMaxDate.setFullYear(_date.getFullYear());

    //this.formOrderFilter.value['endValueDate']=_date;
  }

  public QueryReportClick()
  {

    if(this.formOrderFilter.value['startValueDate']>this.formOrderFilter.value['endValueDate'])
    {
      alert('The date must not be greater than the initial');
      return;
    }
    
    let action = new GetOrdersByCustomerAction({
      customerId:this.formOrderFilter.value['customer'].id,
      startDate: this.formOrderFilter.value['startValueDate'],
      endDate: this.formOrderFilter.value['endValueDate']
    });


    this.store.dispatch(action);

  }
  public CanQueryReportClick():boolean
  {
    return this.formOrderFilter.status=='VALID';
  }
  

  


}
