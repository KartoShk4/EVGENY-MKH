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
    },
  ]

  getEducations(): EducationType[] {
    return this.educations;
  }
}
