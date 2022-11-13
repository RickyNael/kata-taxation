import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('keyup')
  onEvent(): void {
    let element = this.el.nativeElement as HTMLInputElement;
    if (element.value != '') {
      element.value = element.value.split('.')[0];
    }
  }
}
