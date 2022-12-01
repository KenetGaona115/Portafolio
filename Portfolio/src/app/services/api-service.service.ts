import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  URL: string = 'https://dummyjson.com/users'

  getUsers(){
    return this.http.get(this.URL);
  }
}
