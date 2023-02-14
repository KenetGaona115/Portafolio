import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register-proffesor',
  templateUrl: './register-proffesor.component.html',
  styleUrls: ['./register-proffesor.component.scss']
})
export class RegisterProffesorComponent implements OnInit {

  proffesor!:User

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  submit(){

  }

}
