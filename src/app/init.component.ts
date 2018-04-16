import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class InitComponent {
  constructor(private eltRef: ElementRef) {
    let input = this.eltRef.nativeElement;
    (window as any).identification = input.getAttribute('indentification');
    (window as any).resourcesPath = input.getAttribute('resourcesPath');
  }
}
