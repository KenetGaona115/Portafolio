import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { GroupComponent } from './components/group/group.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './shared/student/student.component';
import { GuardService } from './services/guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  { path: 'group', component: GroupComponent, children: [{ path: 'student/:id', component: StudentComponent },], canActivate: [GuardService] },
  { path: 'register', component: RegisterComponent, canActivate: [GuardService] },
  { path: 'attendance', component: AttendanceComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
