import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkWithHref } from "@angular/router";
import {TagColorPipe} from "./pipes/tagColorPipe";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagColorPipe,
  ]
})
export class SharedModule { }
