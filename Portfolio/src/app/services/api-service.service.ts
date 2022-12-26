import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    
    private http: HttpClient,
  ) { }

  //URL: string = 'https://dummyjson.com/users'
  URL: string = 'http://localhost:3000/user/'

  getUsers() {
    return this.http.get<User[]>(this.URL);
  }

  createStudent(data: any) {
    this.createStudentFromData(data)
  }

  private createStudentFromData(data: FormGroup) {
    let student = new User();
    student.firstName = data.controls["firstName"].value
    student.lastName = data.controls["lastName"].value
    student.age = data.controls["age"].value
    student.gender = data.controls["gener"].value
    student.email = data.controls["email"].value
    //student.id = 
  }
}
