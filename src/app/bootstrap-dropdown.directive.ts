import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBootstrapDropdown]'
})
export class BootstrapDropdownDirective {

  constructor(private el: ElementRef) { }
  //Binding click to Add show class 
  @HostListener('click') onclick() {

    var parent = this.el.nativeElement;//parent element
    parent.classList.toggle('show');
    var child = [].filter.call(this.el.nativeElement.children, function (ele) {
      return ele.classList.contains('dropdown-menu');
    }); //Identify the child element on dropdown clicked- dropdwon menu

    if (child.length) {
      child[0].classList.toggle('show');
    }
  }
}
