import { Component } from '@angular/core';
import {WorkExperienceType} from "../../../../types/work-experience.type";
import {EducationType} from "../../../../types/education.type";

@Component({
  selector: 'education-component',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educations: EducationType[] = [
    {
      work: 'Frontend разработчик (студент)',
      time: 'Обучение',
      name: 'Айтилогия',
      date: 'Март 2024 - Март 2025',
    },
  ]

}
