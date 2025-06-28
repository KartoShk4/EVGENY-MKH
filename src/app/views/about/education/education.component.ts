import {Component, OnInit} from '@angular/core';
import {EducationService} from '../../../shared/services/education.service';
import {EducationType} from "../../../../types/education.type";

@Component({
  selector: 'education-component',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {
  educations: EducationType[] = [];

  constructor(private educationsService: EducationService) {
  }

  ngOnInit(): void {
    this.educations = this.educationsService.getEducations();
  }
}
