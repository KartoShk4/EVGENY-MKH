import {Component, Input, OnInit} from '@angular/core';
import {ProjectCardType} from "../../../types/project-card.type";

@Component({
  selector: 'project-card-component',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project!: ProjectCardType;


  constructor() {
  }

  ngOnInit(): void {
  }

  projects: ProjectCardType[] = [
    {
      imageUrl: '../assets/images/pages/card/cookies.png',
      title: 'Проект "Macaroons"',
      description: 'Верстка одностраничного сайта. Страница с товарами, ценами и формой обратной связи.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
    {
      imageUrl: '../assets/images/pages/card/cookies.png',
      title: 'Проект "Macaroons"',
      description: 'Верстка одностраничного сайта. Страница с товарами, ценами и формой обратной связи.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
    {
      imageUrl: '../assets/images/pages/card/cookies.png',
      title: 'Проект "Macaroons"',
      description: 'Верстка одностраничного сайта. Страница с товарами, ценами и формой обратной связи.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
  ]
}
