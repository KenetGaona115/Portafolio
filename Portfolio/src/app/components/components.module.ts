import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GroupComponent } from './group/group.component';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../shared/shared.module';
import { AttendanceComponent } from './attendance/attendance.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent,
    RegisterComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCheckboxModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent,
    RegisterComponent,
    AttendanceComponent
  ]
})
export class ComponentsModule { }
