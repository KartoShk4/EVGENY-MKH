import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';


interface VanillaTiltHTMLElement extends HTMLElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

@Directive({
  selector: '[appTilt]'
})
export class TiltDirective implements OnInit, OnDestroy {
  @Input('appTilt') tiltOptions: any;
  private readonly element: VanillaTiltHTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    VanillaTilt.init(this.element, this.tiltOptions || {
      max: 25,
      speed: 2000,
      scale: 1,
      'gyroscope': true
    });
  }

  ngOnDestroy(): void {
    this.element.vanillaTilt?.destroy();
  }
}
