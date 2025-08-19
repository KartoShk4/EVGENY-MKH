import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {TagColorPipe} from "./pipes/tagColorPipe";
import {TypedDirective} from "./directives/typed.directive";
import {TiltDirective} from "./directives/tilt.directive";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProjectCardComponent} from "../views/main/project-card/project-card.component";
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
    TypedDirective,
    TiltDirective,
    NotFoundComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    CarouselModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
    TypedDirective,
    TiltDirective,
    NotFoundComponent,
    ProjectCardComponent,
  ]
})
export class SharedModule {
}
