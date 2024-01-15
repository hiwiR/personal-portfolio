import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
]
const layoutModules = [
  LayoutModule,
  FlexLayoutModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
    layoutModules
  ],
  exports : [
    materialModules,
    layoutModules
  ],
  providers: [BreakpointObserver]
})
export class MaterialModule { }
