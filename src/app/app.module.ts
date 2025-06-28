import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MainComponent} from './views/main/main.component';
import {RouterModule} from "@angular/router";
import {ProjectCardComponent} from "./views/main/project-card/project-card.component";
import {AboutComponent} from './views/about/about.component';
import {EducationComponent} from './views/about/education/education.component';
import {TechComponent} from './views/main/tech/tech.component';
import {ContactsComponent} from './views/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    EducationComponent,
    TechComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
