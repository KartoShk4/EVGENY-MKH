import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective implements OnInit {
  @Input('appTyped') strings: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    new Typed(this.el.nativeElement, {
      strings: this.strings,
      typeSpeed: 70,
      backSpeed: 60,
      loop: false,
      showCursor: true,
    });
  }
}
