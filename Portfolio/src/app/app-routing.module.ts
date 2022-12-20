import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './components/group/group.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'group', component: GroupComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'attendance', component: AttendanceComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
