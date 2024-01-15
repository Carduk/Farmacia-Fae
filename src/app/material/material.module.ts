import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatFormFieldModule, MatInputModule],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
