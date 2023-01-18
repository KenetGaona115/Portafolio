import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin()
    this.isLoggedIn = this.authService.isAuthenticated()
  }


  logout(): void {
    this.authService.logout()
  }
}
