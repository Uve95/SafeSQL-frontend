import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
//Endpoint del Backend
private backendURL: string = "http://localhost:8080/user/listUsers";
   
constructor(
  //HttpClient para proporcionar métodos que reciben datos del backend
  private httpClient: HttpClient
  ) { }

//Methods
findAllUsers(): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.backendURL}`);
}
}