import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkWithHref } from "@angular/router";
import {TagColorPipe} from "./pipes/tagColorPipe";
import {TypedDirective} from "./directives/typed.directive";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
    TypedDirective,
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
  ]
})
export class SharedModule { }
