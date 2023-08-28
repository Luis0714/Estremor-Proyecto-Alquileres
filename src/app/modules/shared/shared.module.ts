import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFileComponent } from './components/input-file/input-file.component';





@NgModule({
  declarations: [

  
    InputFileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
  ]

})
export class SharedModule { }
