import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};


@Injectable({
  providedIn: 'root'
})

export class UserService {

  //Endpoint del Backend
/*private backendURL: string = "http://localhost:8080/user";
private saveUserURL: string = "http://localhost:8080/user/register";
private listUsersURL: string = "http://localhost:8080/user/userList";
private loginUserURL: string = "http://localhost:8080/user/login";
private forgotPasswordURL: string = "http://localhost:8080/user/forgotPassword";
private changePasswordURL: string = "http://localhost:8080/user/changePassword";
private listUser: string = "http://localhost:8080/user//user-list
*/

private listUser: string = "http://localhost:8080/api/user/"

constructor(private httpClient: HttpClient) { }


//Methods

public list(): Observable<User[]> {
  return this.httpClient.get<User[]>(`${this.listUser}`  + `list`);
}


public details(email: String): Observable<User> {
  return this.httpClient.get<User>(`${this.listUser}` + `details/${email}`, cabecera);
}


public update(user:User, email:String): Observable<User> {
  return this.httpClient.put<User>(this.listUser + `update/${email}`,user);
}

public delete(email: String): Observable<any> {
  return this.httpClient.delete<any>(this.listUser + `delete/${email}`, cabecera);
}

/*loginUser(info:string): Observable<Object>{
return this.httpClient.post(`${this.loginUserURL}`,info);
}

registerUser(user:User): Observable<Object>{
  return this.httpClient.post(`${this.saveUserURL}`,user);
  }
  

updateUser(email:string,user:User): Observable<Object>{
  return this.httpClient.put(`${this.backendURL}/${email}`,user);
}

deleteUser(email:string): Observable<Object>{
  return this.httpClient.delete(`${this.backendURL}/${email}`);
}
findAllUsers(): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.listUsersURL}`);
}

forgotPassword(info:string): Observable<Object>{
  return this.httpClient.post<User[]>(`${this.forgotPasswordURL}`, info);
}

changePassword( info:string, email:string): Observable<Object>{

  return this.httpClient.post<User[]>(`${this.changePasswordURL}`, {'email':email, 'password':info});
}
*/
}