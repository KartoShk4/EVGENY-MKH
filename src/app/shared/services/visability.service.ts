// visibility.service.ts
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
