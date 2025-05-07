import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

// 👇 Здесь описываем расширенный тип
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
  private element: VanillaTiltHTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    VanillaTilt.init(this.element, this.tiltOptions || {
      max: 15,
      speed: 400,
      scale: 1,
      'glare-prerender': false,
      'gyroscope': true
    });
  }

  ngOnDestroy(): void {
    this.element.vanillaTilt?.destroy();
  }
}
