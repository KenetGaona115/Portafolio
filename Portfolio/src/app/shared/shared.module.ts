import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterStudentComponent } from './register-student/register-student.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RegisterClassComponent } from './register-class/register-class.component';
import { StudentComponent } from './student/student.component';
import { RegisterProffesorComponent } from './register-proffesor/register-proffesor.component';


@NgModule({
  declarations: [
    RegisterStudentComponent,
    RegisterClassComponent,
    StudentComponent,
    RegisterProffesorComponent
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
    RegisterProffesorComponent,
    StudentComponent
  ]
})
export class SharedModule { }
