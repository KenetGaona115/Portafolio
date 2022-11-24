import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    ToolbarComponent
  ]
})
export class ComponentsModule { }
