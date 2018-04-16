import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "./../../redux/app.store";
import { IItemMenu } from "./../../redux/app.interfaces";
import { ChangeDefaultItemMenuAction } from "./../../redux/app.actions";
import { Router } from '@angular/router';

//services
import { GlobalService } from "./../../services/global.service";

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public listItems:IItemMenu[];
  public defaultItem: IItemMenu;

  constructor(
    private store:Store<AppState>,
    private router:Router,
    private globalService:GlobalService
  ) {
    let currentUrl=this.router.routerState.snapshot.url.replace('/','');

    this.globalService.LoadUrl(currentUrl)
    this.listItems=this.globalService.listItems;
    this.defaultItem=this.globalService.defaultItem;
   
  }

  ngOnInit() {
    
  }

  public itemsControlChange($e:IItemMenu)
  {
    this.listItems=this.listItems.filter(p=>p.name!=$e.name);

    this.listItems.push(this.defaultItem);

    this.defaultItem=$e;
    
    this.globalService.defaultItem=this.defaultItem;
    this.globalService.listItems=this.listItems;

    this.router.navigate([this.defaultItem.route]);
  }

  public LogoutClick()
  {
    this.globalService.DeleteToken();
    this.router.navigate(['/login']);
  }
}
