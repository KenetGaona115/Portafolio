import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterStudentComponent } from './register-student/register-student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterClassComponent } from './register-class/register-class.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentComponent } from './student/student.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


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
