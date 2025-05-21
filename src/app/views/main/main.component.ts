import {Component, OnInit} from '@angular/core';
import {ProjectCardType} from "../../../types/project-card.type";
import {ProjectsService} from "../../shared/services/projects.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  projects: ProjectCardType[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects().slice(0,6)
  }

}
