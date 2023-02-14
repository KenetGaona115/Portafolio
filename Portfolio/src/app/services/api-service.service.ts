import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { Class } from '../interfaces/assigment.inteface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(

    private http: HttpClient,
  ) { }

  //URL: string = 'https://dummyjson.com/users'
  URL: string = 'http://localhost:3000/user'

  getUsers() {
    let params = new HttpParams().append("id", "all")
    return this.http.get<User[]>(this.URL + '/getStudent', { params: params });
  }

  getUserByID(id: string) {
    let params = new HttpParams().append("id", id)
    return this.http.get<User>(this.URL + '/getStudent', { params: params })
  }

  updateStudent(student: FormGroup, id?: string) {
    return this.http.put<any>(this.URL + '/updateStudent', this.getStudentFromData(student, id))
  }

  createStudent(data: any) {
    return this.http.post(this.URL + '/createStudent', this.createStudentFromData(data))
  }

  deleteStudent(data: any) {
    return this.http.delete(this.URL + '/deleteStudent', { body: data })
  }

  createProfessor(data: any) {
    return this.http.post(this.URL + '/createProffesor', this.createProffesorFromData(data))
  }

  getProffesors() {
    return this.http.get<User[]>(this.URL + '/getProffesors')
  }

  createClass(data: any) {
    return this.http.post(this.URL + '/createStudent', data)
  }

  getClass() {
    return this.http.get<Class[]>(this.URL + '/getClass')
  }

  private createStudentFromData(data: FormGroup) {
    let student = new User();
    student.firstName = data.controls["firstName"].value
    student.lastName = data.controls["lastName"].value
    student.age = data.controls["age"].value
    student.gender = data.controls["gener"].value
    student.email = data.controls["email"].value
    student.id = new Date().getTime().toString()

    return student;
  }

  private createProffesorFromData(data: FormGroup) {
    let proffesor = new User()
    proffesor = data.value
    proffesor.id = new Date().getTime().toString()
    return proffesor
  }

  private getStudentFromData(data: FormGroup, id?: string) {
    let student = new User();
    student.firstName = data.controls["firstName"].value
    student.lastName = data.controls["lastName"].value
    student.age = data.controls["age"].value
    student.gender = data.controls["gener"].value
    student.email = data.controls["email"].value
    student.id = id

    return student;
  }
}
