import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./views/main/main.component";
import {AboutComponent} from "./views/about/about.component";
import {ContactsComponent} from "./views/contacts/contacts.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {
    path: 'projects', loadChildren: () =>
      import('./views/projects/projects.module').then(m => m.ProjectsModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
