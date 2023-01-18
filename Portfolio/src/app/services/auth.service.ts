import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL: string = 'http://localhost:3000/user'

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private router: Router
  ) { }

  isAuthenticated() {
    return JSON.parse(localStorage.getItem('user') as string) ? true : false;
  }

  login(data: any) {
    console.log(data);
    let params = new HttpParams().append("email", data.email).append("password", data.password)
    this.http.get(this.URL + '/getSession', { params }).subscribe(
      (next: any) => {
        console.log(next);
        if (next.code == 500) {
          this.alertService.error('Correo o contraseña incorrectos')
        } else {
          this.alertService.success(next.rol == 0 ? 'inicio de sesion correcto maestro' : 'inicio de sesion correcto Admin')
          localStorage.setItem('user', JSON.stringify(next));
          this.router.navigate(['/home']);
        }
      }
    )
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem('user') as string).rol == 1
  }

  adminValidate() {
    if (JSON.parse(localStorage.getItem('user') as string).rol != 1) {
      this.alertService.error('usted no tiene perisos de administrator')
      this.router.navigate(['/home']);
    }
  }

  logout() {
    localStorage.removeItem('user')
  }

}
