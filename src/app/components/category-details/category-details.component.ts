import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';


@Component({
    selector: 'category-details',
    templateUrl: './category-details.component.html'
})
export class CategoryDetailComponent implements OnInit {
  
    @Input() public category: Object;

    //public view: Observable<GridDataResult>;
    public skip = 0;

    constructor() { }

    public ngOnInit(): void {
        //this.view = this.service;
        console.log(this.category);
        /*load products for the given category*/
        //this.service.queryForCategory(this.category, { skip: this.skip, take: 5 });
    }

    public pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        //this.service.queryForCategory(this.category, { skip, take });
    }
}
