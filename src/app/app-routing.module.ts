import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentModule } from './shared/modules/component.module';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ExpTimelineComponent } from './components/exp-timeline/exp-timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: OverviewComponent },
  {path: 'experience', component: ExpTimelineComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'contact', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
