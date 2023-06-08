import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user';

const cabecera = { headers: new HttpHeaders({ 'Content-TYpe': 'application/json' }) };


@Injectable({
  providedIn: 'root'
})

export class UserService {

  public loginStatusSubject = new Subject<boolean>();

  //Endpoint del Backend
  /*private backendURL: string = "http://localhost:8080/user";
  private saveUserURL: string = "http://localhost:8080/user/register";
  private listUsersURL: string = "http://localhost:8080/user/userList";
  private loginUserURL: string = "http://localhost:8080/user/login";
  private forgotPasswordURL: string = "http://localhost:8080/user/forgotPassword";
  private changePasswordURL: string = "http://localhost:8080/user/changePassword";
  private listUser: string = "http://localhost:8080/user//user-list
  */

  private baseURL: string = "http://localhost:8080/"
  private userURL: string = "http://localhost:8080/api/user/"
  private adminURL: string = "http://localhost:8080/api/admin/"


  constructor(private httpClient: HttpClient) { }





  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userURL + `register`, user);
  }



  public list(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.adminURL}` + `list`);
  }


  public details(email: String): Observable<User> {
    return this.httpClient.get<User>(`${this.adminURL}` + `details/${email}`, cabecera);
  }


  public update(user: User, email: String): Observable<User> {
    return this.httpClient.put<User>(this.adminURL + `update/${email}`, user);
  }

  public delete(email: String): Observable<any> {
    return this.httpClient.delete<any>(this.adminURL + `delete/${email}`, cabecera);
  }



  public forgotPassword(user: User): Observable<Object> {
    return this.httpClient.post<User>(this.userURL + `forgotPassword`, user);
  }

  public changePassword(info: string, email: string): Observable<Object> {

    return this.httpClient.post<User[]>(`${this.userURL}`, { 'email': email, 'password': info });
  }


  //Login


  generateToken(user: any) {
    return this.httpClient.post(this.baseURL + `generate-token`, user);
  }


  //Iniciamos sesion y lo almacenamos en localStorage (guardar el token por un tiempo para la sesion)

  public loginUser(token: any) {

    localStorage.setItem('token', token);

  }

  public isLoggedIn() {

    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }

    return true;
  }


  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUser() {
    let userStr = localStorage.getItem('user');

    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
    }
  }

  public getCurrentUser() {
    return this.httpClient.get(this.baseURL + `actual-user`);
  }
}