import {Injectable} from '@angular/core';
import {EducationType} from "../../../types/education.type";

@Injectable({providedIn: 'root'})
export class EducationService {

  educations: EducationType[] = [
    {
      education: 'Frontend разработчик',
      time: 'Обучение',
      name: 'Айтилогия',
      address: 'Москва (удалённо)',
      date: 'Март 2024 - Март 2025',
      link: 'https://itlogia.ru/certificates/course/742-56068',
    },
    {
      education: 'Frontend разработчик',
      time: 'Фриланс',
      name: 'FinRate',
      address: 'Октябрьский (удалённо)',
      date: 'Июнь 2025 - Август 2025',
      link: '/about',
    },
  ]

  getEducations(): EducationType[] {
    return this.educations;
  }
}
