import { Component, OnInit } from '@angular/core';
import { TeacherClass } from 'src/app/classes/TeacherClass';
import { User } from 'src/app/interfaces/user.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.scss']
})
export class RegisterClassComponent implements OnInit {

  classTeacher: TeacherClass = new TeacherClass();
  teacher: User[] = [];

  constructor(
    private apiserverService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.apiserverService.getProffesors().subscribe((proffes) => { this.teacher = proffes })
  }

  submit(): any {
    this.apiserverService.createClass(this.classTeacher).subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
