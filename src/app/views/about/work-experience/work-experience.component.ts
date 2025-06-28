import {Component, OnInit} from '@angular/core';
import {WorkExperienceType} from "../../../../types/work-experience.type";
import {WorksService} from '../../../shared/services/works.service';

@Component({
  selector: 'work-experience-component',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  works: WorkExperienceType[] = []

  constructor(private worksService: WorksService) {
  }

  ngOnInit(): void {
    this.works = this.worksService.getWorks();
  }
}
