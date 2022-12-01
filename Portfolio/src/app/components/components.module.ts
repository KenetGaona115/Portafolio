import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GroupComponent } from './group/group.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent,
    GroupComponent
  ]
})
export class ComponentsModule { }
