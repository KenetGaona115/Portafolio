import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {


  constructor(
    private apiService: ApiServiceService
  ) { }

  users: any;

  ngOnInit(): void {
    //this.apiService.getUsers().subscribe(response => { this.users = response; console.log(this.users); });
  }

}
