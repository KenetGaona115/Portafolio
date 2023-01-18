import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
  $userData: Observable<User[]> = new Observable;
  private subscription: Subscription = new Subscription;
  //  users: User[] = [];
  students: User[] = [];

  constructor(
    private apiService: ApiServiceService,
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.$userData = this.apiService.getUsers()
    this.subscription = this.$userData.subscribe(response => { this.students = response });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
