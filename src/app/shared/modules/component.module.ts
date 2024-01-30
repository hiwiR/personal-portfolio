import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from '../../components/home/home.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { ExpTimelineComponent } from '../../components/exp-timeline/exp-timeline.component';
import { ContactMeComponent } from '../../components/contact-me/contact-me.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const components = [
  HeaderComponent,
  HomeComponent,
  OverviewComponent,
  ExpTimelineComponent,
  ContactMeComponent,
  ProjectsComponent
]
@NgModule({
  declarations: [
  components
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    components
  ] 
})
export class ComponentModule { }
