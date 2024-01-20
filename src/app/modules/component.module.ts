import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from '../components/home/home.component';
import { OverviewComponent } from '../components/overview/overview.component';
import { ExpTimelineComponent } from '../components/exp-timeline/exp-timeline.component';
const components = [
  HeaderComponent,
  HomeComponent,
  OverviewComponent,
  ExpTimelineComponent
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
