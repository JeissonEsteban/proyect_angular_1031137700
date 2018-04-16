import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment'; 

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Http
import { HttpClientModule } from '@angular/common/http';

//KendoUI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

//Redux
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from "./redux/app.reducer";
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './redux/user/app.user.effects';
import { CustomerEffects } from './redux/customer/app.customer.effects';
import { ProductEffects } from './redux/product/app.product.effects';
import { OrderEffects } from './redux/order/app.order.effects';

//Routes
import { AppRoutingModule } from './app.routing';
import { InitComponent } from './init.component';

//Pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderReportComponent } from './pages/orderReport/orderReport.component';

//Components
import { HeaderComponent } from "./components/header/header.component";
import { CategoryDetailComponent } from "./components/category-details/category-details.component";

//Services
import { GlobalService } from "./services/global.service";
import { UserService } from "./services/user.service";
import { CustomerService } from "./services/customer.service";
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";

@NgModule({
    declarations: [
        InitComponent,
        /*Pages */
        DashboardComponent,
        LoginComponent,
        OrderReportComponent,
        /*Components */
        HeaderComponent,
        CategoryDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,

        /*Redux */
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production // Restrict extension to log-only mode
          }),
          [EffectsModule.forRoot([UserEffects,CustomerEffects,ProductEffects,OrderEffects])],
        /*Kendo UI */
        ButtonsModule,
        InputsModule,
        DropDownsModule,
        GridModule,
        ChartsModule,
        DateInputsModule
    ],
    providers: [
        /*Services */
        GlobalService,
        ProductService,
        OrderService,
        CustomerService,
        UserService,
        /*Effects */
        UserEffects,
        ProductEffects,
        CustomerEffects,
        OrderEffects
       
    ],
    bootstrap: [InitComponent]
})
export class AppModule { }