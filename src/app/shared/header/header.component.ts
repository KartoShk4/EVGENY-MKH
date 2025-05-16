import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    // Блокируем/разблокируем скролл
    if (this.menuOpen) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
  }

  // Закрываем меню при клике на ссылку (для мобильной версии)
  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('lock');
  }

  // Закрываем меню при изменении размера экрана (если стало больше 768px)
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth > 768) {
      this.menuOpen = false;
      document.body.classList.remove('lock');
    }
  }
}


