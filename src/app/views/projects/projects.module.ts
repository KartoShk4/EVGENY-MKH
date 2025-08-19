import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectsComponent} from './projects/projects.component';
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";
import {FiltersComponent} from "../main/filters/filters.component";
import {ProjectCardComponent} from "../main/project-card/project-card.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
  ]
})
export class ProjectsModule {
}
