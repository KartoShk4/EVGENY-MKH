import {Component, OnInit} from '@angular/core';
import { TitleNotifierService } from 'src/app/shared/services/title-notifier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleNotifier: TitleNotifierService) {
  }

  // Настройка отображения title
  ngOnInit(): void {
    this.titleNotifier.setTitles(
      'Евгений Мухамадеев 🙂',
      'Возвращайтесь 😢'
    );
  }
}
