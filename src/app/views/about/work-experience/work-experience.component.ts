import { Component} from '@angular/core';
import {ProjectCardType} from "../../../../types/project-card.type";
import {WorkExperienceType} from "../../../../types/work-experience.type";

@Component({
  selector: 'work-experience-component',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  works: WorkExperienceType[] = [
    {
      work: 'Frontend разработчик (студент)',
      time: 'Обучение',
      name: 'Айтилогия',
      address: 'Москва',
      date: 'Март 2024 - Март 2025',
    },
  ]
}
