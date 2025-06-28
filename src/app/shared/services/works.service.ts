import {Injectable} from '@angular/core';
import {WorkExperienceType} from "../../../types/work-experience.type";

@Injectable({providedIn: 'root'})
export class WorksService {

  works: WorkExperienceType[] = [
    {
      work: 'Frontend разработчик',
      time: 'Работа',
      name: 'Айтилогия',
      address: 'Москва(удалённо)',
      date: 'Март 2024 - Март 2025',
    },
    {
      work: 'Frontend разработчик',
      time: 'Работа',
      name: 'Айтилогия',
      address: 'Москва(удалённо)',
      date: 'Март 2024 - Март 2025',
    },
    {
      work: 'Frontend разработчик',
      time: 'Работа',
      name: 'Айтилогия',
      address: 'Москва(удалённо)',
      date: 'Март 2024 - Март 2025',
    },
  ]

  getWorks(): WorkExperienceType[] {
    return this.works;
  }
}
