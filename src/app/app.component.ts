import {Component, OnInit, ChangeDetectorRef, HostListener} from '@angular/core';
import {TitleNotifierService} from 'src/app/shared/services/title-notifier.service';
import {VisibilityService} from "./shared/services/visability.service";
import {filter} from 'rxjs';
import {NavigationEnd, Router, Event} from "@angular/router";
import AOS from 'aos';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeaderFooter: boolean = true;
  showButton = false;

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

    // Отслеживание роутинга в Angular для Google Аналитика
    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
        gtag('config', 'G-L8C4W6J8KE', {
          'page_path': event.urlAfterRedirects
        });
      })
  }

  ngOnInit(): void {
    this.titleNotifier.setTitles(
      'Евгений Мухамадеев 🙂',
      'Возвращайтесь 😢'
    );
    AOS.init({
      once: false,
      mirror: true,
      duration: 800
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showButton = window.scrollY > 100;
  }

  scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
