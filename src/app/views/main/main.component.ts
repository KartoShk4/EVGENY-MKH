import {Component, OnInit} from '@angular/core';
import {ProjectCardType} from "../../../types/project-card.type";
import {ProjectsService} from "../../shared/services/projects.service";
import {ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('tiltImage', {static: true}) tiltImage!: ElementRef;

  projects: ProjectCardType[] = [];

  constructor(private projectService: ProjectsService) {
  }

  ngAfterViewInit(): void {
    VanillaTilt.init(this.tiltImage.nativeElement, {
      max: 9,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      'gyroscope': true
    });
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects().slice(0, 6)
  }

}
