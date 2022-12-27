import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterStudentComponent } from './register-student/register-student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RegisterClassComponent } from './register-class/register-class.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    RegisterStudentComponent,
    RegisterClassComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    RegisterStudentComponent,
    RegisterClassComponent,
    StudentComponent
  ]
})
export class SharedModule { }
