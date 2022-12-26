import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      age: [, [Validators.required, Validators.min(18)]],
      gener: [,[Validators.required]],
      email: [, [Validators.email]],
    })

    this.form.get("firstName")?.valueChanges.subscribe(data => {console.log(data)})
  }

  create(): void {
    this.apiService.createStudent(this.form)
  }

}
