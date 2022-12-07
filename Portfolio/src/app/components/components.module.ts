import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GroupComponent } from './group/group.component';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent,
    RegisterComponent
  ]
})
export class ComponentsModule { }
