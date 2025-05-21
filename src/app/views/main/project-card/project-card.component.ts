import {Component, Input} from '@angular/core';
import {ProjectCardType} from "../../../../types/project-card.type";

@Component({
  selector: 'project-card-component',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() project!: ProjectCardType;



}
