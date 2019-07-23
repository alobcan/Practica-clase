import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiva1]'
})
export class Directiva1Directive {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publicconMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave')
  publiconMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "green";
  }

}
