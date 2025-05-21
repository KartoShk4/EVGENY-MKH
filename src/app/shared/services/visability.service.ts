// Скрывает Header и Footer на странице 404(not-found)

import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private showHeaderFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  currentVisibility: Observable<boolean> = this.showHeaderFooter.asObservable();

  changeVisibility(visible: boolean): void {
    this.showHeaderFooter.next(visible);
  }
}
