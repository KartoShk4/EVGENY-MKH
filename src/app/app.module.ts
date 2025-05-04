import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { MainComponent } from './views/main/main.component';
import {RouterModule} from "@angular/router";
import {ProjectCardComponent} from "./views/main/project-card/project-card.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectCardComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
