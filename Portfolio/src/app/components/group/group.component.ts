import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(
    private apiService: ApiServiceService
  ) { }

  users: any;

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(response => { this.users = response; console.log(this.users); });
  }



}
