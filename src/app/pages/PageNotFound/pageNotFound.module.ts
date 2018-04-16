import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './pageNotFound.routing';
import { PageNotFoundComponent } from './pageNotFound.component';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }

  