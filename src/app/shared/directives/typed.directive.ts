import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[appTyped]'
})
export class TypedDirective implements OnInit {
  @Input('appTyped') strings: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const typed = new Typed(this.el.nativeElement, {
      strings: this.strings.map((str) => {
        // Убираем теги <span> из строки и заменяем их на что-то, что можно безопасно напечатать.
        return str.replace(/<span.*?>.*?<\/span>/g, (match) => {
          // Возвращаем сам HTML-тег, чтобы Typed.js мог его вставить как HTML
          return match;
        });
      }),
      typeSpeed: 70,
      backSpeed: 60,
      loop: false,
      showCursor: true,
      onComplete: () => {
        // Когда напечатается первая строка, добавляем остальные строки с HTML
        this.el.nativeElement.innerHTML = this.strings.join(''); // Вставляем HTML с текстами
      }
    });
  }
}
