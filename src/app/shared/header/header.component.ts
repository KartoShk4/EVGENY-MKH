import {Component, HostListener, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

  constructor(private router: Router) {}

  // По умолчанию меню закрыто.
  menuOpen: boolean = false;

  // Переключаем состояние меню - открыто\закрыто
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    // Вызываем функцию - блокировки\разблокировки скролла в меню
    this.updateBodyLock();
  }

  // Принудительно закрываем меню
  closeMenu(): void {
    this.menuOpen = false;

    // Добавляем небольшую задержку для якорных ссылок
    setTimeout(() => {
      const fragment = this.router.url.split('#')[1];
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);

    // Вызываем функцию - блокировки\разблокировки скролла в меню
    this.updateBodyLock();
  }

  // Функция - блокировки\разблокировки скролла в меню
  private updateBodyLock(): void {
    if (this.menuOpen) {
      // Фиксируем меню при блокировке скролла
      this.lockBody();
    } else {
      this.unlockBody();
    }
  }

  // Функция блокировки скролла
  private lockBody(): void {
    const scrollY: number = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
  }

  // Функция разблокировки скролла
  private unlockBody(): void {
    const scrollY: number = parseInt(document.body.style.top || '0');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.transition = 'none';

    // Включает плавный переход
    requestAnimationFrame((): void => {
      document.body.style.transition = 'transform 0.3s ease';
      window.scrollTo({
        top: Math.abs(scrollY),
        behavior: 'smooth'
      });
    });

  }

  // Обработка размера окна, для мобильного меню.
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768 && this.menuOpen) {
      this.closeMenu();
    }
  }

  // Важно разблокировать body при уничтожении компонента
  ngOnDestroy(): void {
    this.unlockBody();
  }
}
