import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {VisibilityService} from "../services/visability.service";

@Component({
  selector: 'not-found-component',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor(private visibilityService: VisibilityService) {
  }

  ngOnInit(): void {
    this.visibilityService.changeVisibility(false);
  }

  ngOnDestroy(): void {
    this.visibilityService.changeVisibility(true);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const container = document.getElementById('parallax-container');
    if (container) {
      const x = -e.clientX / 5;
      const y = -e.clientY / 5;

      container.style.backgroundPositionX = x + 'px';
      container.style.backgroundPositionY = y + 'px';
    }
  }
}
