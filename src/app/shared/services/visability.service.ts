// visibility.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private showHeaderFooter = new BehaviorSubject<boolean>(true);
  currentVisibility = this.showHeaderFooter.asObservable();

  changeVisibility(visible: boolean) {
    this.showHeaderFooter.next(visible);
  }
}
