import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  $userData: Observable<User[]> = new Observable;
  private subscription: Subscription = new Subscription;
  //  users: User[] = [];
  users: any;


  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers(): void {
    this.$userData = this.apiService.getUsers()
    this.subscription = this.$userData.subscribe(response => { this.users = response; console.log(this.users) });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}



