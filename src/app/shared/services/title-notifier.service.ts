import { Injectable, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TitleNotifierService implements OnDestroy {
  private originalTitle: string = document.title;
  private hiddenTitle: string = 'Возвращайтесь 😢';
  private isActive: boolean = true;

  constructor() {
    this.setupListeners();
  }

  private setupListeners(): void {
    window.addEventListener('blur', this.handleBlur);
    window.addEventListener('focus', this.handleFocus);
    document.addEventListener('visibilitychange', this.handleVisibility);
  }

  private handleBlur = (): void => {
    if (this.isActive) document.title = this.hiddenTitle;
  };

  private handleFocus = (): void => {
    document.title = this.originalTitle;
  };

  private handleVisibility = (): void => {
    document.title = document.hidden ? this.hiddenTitle : this.originalTitle;
  };

  // Для динамического изменения заголовков
  setTitles(original: string, hidden?: string): void {
    this.originalTitle = original;
    if (hidden) this.hiddenTitle = hidden;
    document.title = original;
  }

  // Отключение функционала
  disable(): void {
    this.isActive = false;
    document.title = this.originalTitle;
  }

  ngOnDestroy(): void {
    window.removeEventListener('blur', this.handleBlur);
    window.removeEventListener('focus', this.handleFocus);
    document.removeEventListener('visibilitychange', this.handleVisibility);
    document.title = this.originalTitle;
  }
}
