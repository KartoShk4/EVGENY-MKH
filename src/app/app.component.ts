import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleNotifierService } from 'src/app/shared/services/title-notifier.service';
import { VisibilityService } from "./shared/services/visability.service";
import { filter } from 'rxjs';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeaderFooter: boolean = true;

  constructor(
    private titleNotifier: TitleNotifierService,
    private visibilityService: VisibilityService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.visibilityService.currentVisibility.subscribe(visible => {
      setTimeout((): void => {
        this.showHeaderFooter = visible;
        this.cdr.detectChanges();
      });
    });

    // Автоматическое скрытие для страницы 404
    this.router.events
      .pipe(filter((event: any): boolean => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd): void => {
        this.visibilityService.changeVisibility(!event.urlAfterRedirects.includes('not-found'));
      });
  }

  ngOnInit(): void {
    this.titleNotifier.setTitles(
      'Евгений Мухамадеев 🙂',
      'Возвращайтесь 😢'
    );
  }
}
