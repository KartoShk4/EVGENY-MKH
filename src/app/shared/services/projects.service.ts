import {Injectable} from '@angular/core';
import {ProjectCardType} from '../../../types/project-card.type';

@Injectable({providedIn: 'root'})
export class ProjectsService {

  projects: ProjectCardType[] = [
    {
      imageUrl: 'assets/images/pages/card/super-cars/cars01.png',
      images: [
        'assets/images/pages/card/super-cars/cars01.png',
        'assets/images/pages/card/super-cars/cars02.png',
        'assets/images/pages/card/super-cars/cars03.png',
        'assets/images/pages/card/super-cars/cars04.png',

      ],
      title: 'SUPER CARS',
      description: 'Лендинг автосалона с каталогом, описаниями моделей и формой заявки. Адаптивный, стильный дизайн.',
      technologies: 'HTML, CSS, Angular, JavaScript',
      siteLink: 'https://kartoshk4.github.io/cars/',
      codeLink: 'https://github.com/KartoShk4/cars-code'
    },
    {
      imageUrl: 'assets/images/pages/card/2rism/2rism01.png',
      images: [
        'assets/images/pages/card/2rism/2rism01.png',
        'assets/images/pages/card/2rism/2rism2.webp',
        'assets/images/pages/card/2rism/2rism3.webp',
        'assets/images/pages/card/2rism/2rism4.webp',
      ],
      title: '2RISM',
      description: 'Современный адаптивный лендинг с плавной анимацией, удобной навигацией и ярким дизайном для представления бизнеса.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/2rism/',
      codeLink: 'https://github.com/KartoShk4/2rism'
    },
    {
      imageUrl: 'assets/images/pages/card/cookies/cookies1.webp',
      images: [
        'assets/images/pages/card/cookies/cookies1.webp',
        'assets/images/pages/card/cookies/cookies2.webp',
        'assets/images/pages/card/cookies/cookies3.webp',
        'assets/images/pages/card/cookies/cookies4.webp',
      ],
      title: 'COOKIES',
      description: 'Уютный лендинг с домашним печеньем, описанием продукции, процессом приготовления и отзывами. Адаптивный дизайн.',
      technologies: 'HTML, SCSS, TypeScript, Angular',
      siteLink: 'https://kartoshk4.github.io/cookies/',
      codeLink: 'https://github.com/KartoShk4/cookies'
    },
    {
      imageUrl: 'assets/images/pages/card/burger-house/burger1.webp',
      images: [
        'assets/images/pages/card/burger-house/burger1.webp',
        'assets/images/pages/card/burger-house/burger2.webp',
        'assets/images/pages/card/burger-house/burger3.webp',
        'assets/images/pages/card/burger-house/burger4.webp',
      ],
      title: 'BURGER HOUSE',
      description: 'Стильный лендинг бургерной с меню, акциями и отзывами. Адаптивный, с ярким дизайном и удобной навигацией.',
      technologies: 'HTML, SCSS, Angular, TypeScript',
      siteLink: 'https://kartoshk4.github.io/burger/',
      codeLink: 'https://github.com/KartoShk4/burger'
    },
    {
      imageUrl: 'assets/images/pages/card/macaroons/macaroons1.webp',
      images: [
        'assets/images/pages/card/macaroons/macaroons1.webp',
        'assets/images/pages/card/macaroons/macaroons2.webp',
        'assets/images/pages/card/macaroons/macaroons3.webp',
        'assets/images/pages/card/macaroons/macaroons4.webp',
      ],
      title: 'MACAROONS',
      description: 'Лендинг для продажи макарунов с описанием видов, преимуществами и отзывами. Адаптивный и стильный дизайн.',
      technologies: 'HTML, Less, JavaScript',
      siteLink: 'https://kartoshk4.github.io/macaroons/',
      codeLink: 'https://github.com/KartoShk4/macaroons'
    },
    {
      imageUrl: 'assets/images/pages/card/barbershop/barber1.webp',
      images: [
        'assets/images/pages/card/barbershop/barber1.webp',
        'assets/images/pages/card/barbershop/barber2.webp',
        'assets/images/pages/card/barbershop/barber3.webp',
        'assets/images/pages/card/barbershop/barber4.webp',
      ],
      title: 'BARBERSHOP',
      description: 'Современный одностраничный сайт с акцентом на стильный мужской дизайн. Содержит информацию об услугах, преимуществах, ценах и мастерах.',
      technologies: 'HTML, SCSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/barbershop/',
      codeLink: 'https://github.com/KartoShk4/barbershop'
    },
    {
      imageUrl: 'assets/images/pages/card/pizza-cheff/pizza1.webp',
      images: [
        'assets/images/pages/card/pizza-cheff/pizza1.webp',
        'assets/images/pages/card/pizza-cheff/pizza2.webp',
        'assets/images/pages/card/pizza-cheff/pizza3.webp',
      ],
      title: 'PIZZA CHEFF',
      description: 'Лендинг пиццерии с меню, акциями и отзывами. Яркий дизайн, адаптивная верстка и удобная навигация.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/pizza/',
      codeLink: 'https://github.com/KartoShk4/pizza'
    },
    {
      imageUrl: 'assets/images/pages/card/norway/norway1.webp',
      images: [
        'assets/images/pages/card/norway/norway1.webp',
        'assets/images/pages/card/norway/norway2.webp',
        'assets/images/pages/card/norway/norway3.webp',
        'assets/images/pages/card/norway/norway4.webp',
      ],
      title: 'NORWAY',
      description: 'Лендинг о Норвегии с атмосферными фото, ключевыми фактами и интерактивными элементами. Адаптивный, лаконичный дизайн.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/norway/',
      codeLink: 'https://github.com/KartoShk4/norway'
    },
    {
      imageUrl: 'assets/images/pages/card/fashion/fashion.webp',
      images: [
        'assets/images/pages/card/fashion/fashion1.webp',
        'assets/images/pages/card/fashion/fashion2.webp',
        'assets/images/pages/card/fashion/fashion3.webp',
        'assets/images/pages/card/fashion/fashion4.webp',
      ],
      title: 'FASHION',
      description: 'Модный лендинг с карточками товаров, минималистичным дизайном, выполненный на React без адаптива.',
      technologies: 'HTML, CSS, JavaScript, React',
      siteLink: 'https://kartoshk4.github.io/fashion/',
      codeLink: 'https://github.com/KartoShk4/fashion'
    },
    {
      imageUrl: 'assets/images/pages/card/memory-game/memory1.webp',
      images: [
        'assets/images/pages/card/memory-game/memory1.webp',
        'assets/images/pages/card/memory-game/memory2.webp',
        'assets/images/pages/card/memory-game/memory3.webp',
        'assets/images/pages/card/memory-game/memory4.webp',
      ],
      title: 'MEMORY GAME',
      description: 'Увлекательная игра выполненная на React для тренировки памяти: открывай карточки, находи пары и побеждай с умом!',
      technologies: 'HTML, CSS, JavaScript, React',
      siteLink: 'https://kartoshk4.github.io/memory-game/',
      codeLink: 'https://github.com/KartoShk4/memory-game'
    },
    {
      imageUrl: 'assets/images/pages/card/task-manager/task1.webp',
      images: [
        'assets/images/pages/card/task-manager/task1.webp',
        'assets/images/pages/card/task-manager/task2.webp',
        'assets/images/pages/card/task-manager/task3.webp',
        'assets/images/pages/card/task-manager/task4.webp',
      ],
      title: 'TASK MANAGER',
      description: 'Простой и удобный таск-менеджер: добавляй, отмечай выполненные и удаляй задачи. Реализован на JavaScript.',
      technologies: 'HTML, CSS, JavaScript',
      siteLink: 'https://kartoshk4.github.io/taskManager/',
      codeLink: 'https://github.com/KartoShk4/taskManager'
    },
    {
      imageUrl: 'assets/images/pages/card/tea/tea1.webp',
      images: [
        'assets/images/pages/card/tea/tea1.webp',
        'assets/images/pages/card/tea/tea2.webp',
        'assets/images/pages/card/tea/tea3.webp',
        'assets/images/pages/card/tea/tea4.webp',
      ],
      title: 'TEA',
      description: 'Каталог чаёв с карточками товаров: название, описание, цена и кнопка покупки. Лёгкий и понятный интерфейс.',
      technologies: 'HTML, CSS, JavaScript, Angular',
      siteLink: 'https://kartoshk4.github.io/tea/',
      codeLink: 'https://github.com/KartoShk4/tea'
    },
    {
      imageUrl: 'assets/images/pages/card/coffee/coffee1.webp',
      images: [
        'assets/images/pages/card/coffee/coffee1.webp',
        'assets/images/pages/card/coffee/coffee2.webp',
        'assets/images/pages/card/coffee/coffee3.webp',
        'assets/images/pages/card/coffee/coffee4.webp',
      ],
      title: 'CoffeSUN',
      description: 'Сайт — лендинг о кофе, созданный на React + Vite, с минимальной HTML/JS/CSS структурой.',
      technologies: 'HTML, SCSS, JavaScript, React, БЭМ',
      siteLink: 'https://kartoshk4.github.io/cofee-code/',
      codeLink: 'https://github.com/KartoShk4/cofee-code'
    },
  ]

  getProjects(): ProjectCardType[] {
    return this.projects;
  }

  // фильтровать по технологии или "Все проекты"
  getProjectsByFilter(filterName: string): ProjectCardType[] {
    if (filterName === 'Все проекты') {
      return this.projects;
    }
    return this.projects.filter(project =>
    project.technologies.toLowerCase().includes(filterName.toLowerCase()))
  }
}
