import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../shared/services/projects.service';
import { ProjectCardType } from '../../../../types/project-card.type';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectCardType[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
