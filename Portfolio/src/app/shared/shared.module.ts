import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStudentComponent } from './register-student/register-student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterClassComponent } from './register-class/register-class.component';


@NgModule({
  declarations: [
    RegisterStudentComponent,
    RegisterClassComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    RegisterStudentComponent,
    RegisterClassComponent
  ]
})
export class SharedModule { }
