import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from '../components/home/home.component';
const components = [
  HeaderComponent,
  HomeComponent
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
