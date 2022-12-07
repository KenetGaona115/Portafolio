import { Component, OnInit } from '@angular/core';
import { TeacherClass } from 'src/app/classes/TeacherClass';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.scss']
})
export class RegisterClassComponent implements OnInit {

  classTeacher :TeacherClass = new TeacherClass();

  constructor() { }

  ngOnInit(): void {

  }

  submit():any {
    console.log('works')
  }

}
