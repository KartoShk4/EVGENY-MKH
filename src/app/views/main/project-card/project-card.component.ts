import {Component, Input} from '@angular/core';
import {ProjectCardType} from "../../../types/project-card.type";

@Component({
  selector: 'project-card-component',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project!: ProjectCardType;


  projects: ProjectCardType[] = [
    {
      imageUrl: '../assets/images/pages/card/cookies.png',
      title: 'COOKIES',
      description: 'Уютный лендинг с домашним печеньем, описанием продукции, процессом приготовления и отзывами. Адаптивный дизайн.',
      technologies: 'HTML, SCSS, TypeScript, Angular',
      siteLink: 'https://kartoshk4.github.io/cookies/',
      codeLink: 'https://github.com/KartoShk4/cookies'
    },
    {
      imageUrl: '../assets/images/pages/card/burgers.png',
      title: 'BURGER HOUSE',
      description: 'Стильный лендинг бургерной с меню, акциями и отзывами. Адаптивный, с ярким дизайном и удобной навигацией.',
      technologies: 'HTML, SCSS, Angular, TypeScript',
      siteLink: 'https://kartoshk4.github.io/barbershop/',
      codeLink: 'https://github.com/KartoShk4/barbershop'
    },
    {
      imageUrl: '../assets/images/pages/card/macaroons.png',
      title: 'MACAROONS',
      description: 'Лендинг для продажи макарунов с описанием видов, преимуществами и отзывами. Адаптивный и стильный дизайн.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
    {
      imageUrl: '../assets/images/pages/card/barbershop.jpg',
      title: 'BARBERSHOP',
      description: 'Современный одностраничный сайт с акцентом на стильный мужской дизайн. Содержит информацию об услугах, преимуществах, ценах и мастерах.',
      technologies: 'HTML, SCSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/barbershop/',
      codeLink: 'https://github.com/KartoShk4/barbershop'
    },
    {
      imageUrl: '../assets/images/pages/card/pizza.jpg',
      title: 'PIZZA CHEFF',
      description: 'Лендинг пиццерии с меню, акциями и отзывами. Яркий дизайн, адаптивная верстка и удобная навигация.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/pizza/',
      codeLink: 'https://github.com/KartoShk4/pizza'
    },
    {
      imageUrl: '../assets/images/pages/card/kappadokia.png',
      title: 'KAPPADOKIA',
      description: 'Лендинг о Каппадокии с описанием достопримечательностей, туров и фото. Адаптивный и красочный дизайн.',
      technologies: 'HTML, CSS',
      siteLink: 'https://kartoshk4.github.io/kappadokia/',
      codeLink: 'https://github.com/KartoShk4/kappadokia'
    },
  ]
}
