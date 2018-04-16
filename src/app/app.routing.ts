import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderReportComponent } from './pages/orderReport/orderReport.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'order_report', component: OrderReportComponent },
    { path: 'dashboard', component: DashboardComponent },
   /* { path: 'pageNotFound', loadChildren: './pages/PageNotFound#PageNotFoundModule' }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
