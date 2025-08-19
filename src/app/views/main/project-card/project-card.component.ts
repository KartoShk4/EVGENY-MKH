import {Component, Input} from '@angular/core';
import {ProjectCardType} from "../../../../types/project-card.type";
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'project-card-component',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project!: ProjectCardType;

  carouselOptions: OwlOptions = {
    loop: true,               // Зацикливание карусели
    margin: 10,               // Отступ между слайдами
    dots: false,               // Отображение точек - навигации
    items: 1,                 // Количество видимых слайдов
    autoHeight: false,         // Автоматически подстваивать высоту карусели под текущий слайд
    autoplay: true,           // Включает автопрокрутку
    autoplayTimeout: 7000,    // Интервал между слайдами (в мс)
    autoplayHoverPause: true  // Останавливать при наведении
  };

}
