import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatSnackBarModule
]
const layoutModules = [
  LayoutModule,
  FlexLayoutModule
]

const formModules =[
  FormsModule,
  ReactiveFormsModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
    layoutModules,
    formModules
  ],
  exports : [
    materialModules,
    layoutModules,
    formModules
  ],
  providers: [BreakpointObserver]
})
export class MaterialModule { }
