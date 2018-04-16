import { Component, OnInit } from '@angular/core';
import { AnimationDefault } from "./pageNotFound.animation";

@Component({
  selector: 'app-pageNotFound',
  templateUrl: './pageNotFound.component.html',
  styleUrls: ['./pageNotFound.component.scss'],
  animations:AnimationDefault
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
