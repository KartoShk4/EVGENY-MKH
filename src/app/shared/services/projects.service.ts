import { Injectable } from '@angular/core';
import { ProjectCardType } from '../../../types/project-card.type';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  projects: ProjectCardType[] = [
    {
      imageUrl: 'assets/images/pages/card/cars-min-v2.png',
      images: [
        'assets/images/pages/card/2rism-min.png',
        'assets/images/pages/card/burgers-min.png',
        'assets/images/pages/card/fashion.webp',
      ],
      title: 'SUPER CARS',
      description: 'Лендинг автосалона с каталогом, описаниями моделей и формой заявки. Адаптивный, стильный дизайн.',
      technologies: 'HTML, CSS, Angular, JavaScript',
      siteLink: 'https://kartoshk4.github.io/cars/',
      codeLink: 'https://github.com/KartoShk4/cars'
    },
    {
      imageUrl: 'assets/images/pages/card/2rism-min.png',
      title: '2RISM',
      description: 'Современный адаптивный лендинг с плавной анимацией, удобной навигацией и ярким дизайном для представления бизнеса.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/2rism/',
      codeLink: 'https://github.com/KartoShk4/2rism'
    },
    {
      imageUrl: 'assets/images/pages/card/cookies-min.png',
      title: 'COOKIES',
      description: 'Уютный лендинг с домашним печеньем, описанием продукции, процессом приготовления и отзывами. Адаптивный дизайн.',
      technologies: 'HTML, SCSS, TypeScript, Angular',
      siteLink: 'https://kartoshk4.github.io/cookies/',
      codeLink: 'https://github.com/KartoShk4/cookies'
    },
    {
      imageUrl: 'assets/images/pages/card/burgers-min.png',
      title: 'BURGER HOUSE',
      description: 'Стильный лендинг бургерной с меню, акциями и отзывами. Адаптивный, с ярким дизайном и удобной навигацией.',
      technologies: 'HTML, SCSS, Angular, TypeScript',
      siteLink: 'https://kartoshk4.github.io/burger/',
      codeLink: 'https://github.com/KartoShk4/burger'
    },
    {
      imageUrl: 'assets/images/pages/card/macaroons-min.png',
      title: 'MACAROONS',
      description: 'Лендинг для продажи макарунов с описанием видов, преимуществами и отзывами. Адаптивный и стильный дизайн.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
    {
      imageUrl: 'assets/images/pages/card/barbershop-min.jpg',
      title: 'BARBERSHOP',
      description: 'Современный одностраничный сайт с акцентом на стильный мужской дизайн. Содержит информацию об услугах, преимуществах, ценах и мастерах.',
      technologies: 'HTML, SCSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/barbershop/',
      codeLink: 'https://github.com/KartoShk4/barbershop'
    },
    {
      imageUrl: 'assets/images/pages/card/pizza-min.jpg',
      title: 'PIZZA CHEFF',
      description: 'Лендинг пиццерии с меню, акциями и отзывами. Яркий дизайн, адаптивная верстка и удобная навигация.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/pizza/',
      codeLink: 'https://github.com/KartoShk4/pizza'
    },
    {
      imageUrl: 'assets/images/pages/card/norway-min.webp',
      title: 'NORWAY',
      description: 'Лендинг о Норвегии с атмосферными фото, ключевыми фактами и интерактивными элементами. Адаптивный, лаконичный дизайн.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/norway/',
      codeLink: 'https://github.com/KartoShk4/norway'
    },
    {
      imageUrl: 'assets/images/pages/card/fashion.webp',
      title: 'FASHION',
      description: 'Модный лендинг с карточками товаров, минималистичным дизайном, выполненный на React без адаптива.',
      technologies: 'HTML, CSS, JavaScript, React',
      siteLink: 'https://kartoshk4.github.io/fashion/',
      codeLink: 'https://github.com/KartoShk4/fashion'
    },
    {
      imageUrl: 'assets/images/pages/card/memory-game.png',
      title: 'MEMORY GAME',
      description: 'Увлекательная игра выполненная на React для тренировки памяти: открывай карточки, находи пары и побеждай с умом!',
      technologies: 'HTML, CSS, JavaScript, React',
      siteLink: 'https://kartoshk4.github.io/memory-game/',
      codeLink: 'https://github.com/KartoShk4/memory-game'
    },
    {
      imageUrl: 'assets/images/pages/card/task-manager.png',
      title: 'TASK MANAGER',
      description: 'Простой и удобный таск-менеджер: добавляй, отмечай выполненные и удаляй задачи. Реализован на JavaScript.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/taskManager/',
      codeLink: 'https://github.com/KartoShk4/taskManager'
    },
    {
      imageUrl: 'assets/images/pages/card/tea.webp',
      title: 'TEA',
      description: 'Каталог чаёв с карточками товаров: название, описание, цена и кнопка покупки. Лёгкий и понятный интерфейс.',
      technologies: 'HTML, CSS, JavaScript, Angular',
      siteLink: 'https://kartoshk4.github.io/tea/',
      codeLink: 'https://github.com/KartoShk4/tea'
    },
  ]

  getProjects(): ProjectCardType[] {
    return this.projects;
  }
}
