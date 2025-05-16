import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkWithHref } from "@angular/router";
import { TagColorPipe } from "./pipes/tagColorPipe";
import { TypedDirective } from "./directives/typed.directive";
import { TiltDirective } from "./directives/tilt.directive";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
    TypedDirective,
    TiltDirective,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
    TypedDirective,
    TiltDirective,
  ]
})
export class SharedModule { }
