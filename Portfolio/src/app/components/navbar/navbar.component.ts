import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.reducer';
import { LOGOUT } from 'src/app/store/login/login.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin()
    this.isLoggedIn = this.authService.isAuthenticated()
  }


  logout(): void {
    this.store.dispatch(LOGOUT())
    this.authService.logout()
  }
}
