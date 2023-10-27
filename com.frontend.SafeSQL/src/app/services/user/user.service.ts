import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  public loginStatusSubject = new Subject<boolean>();
  infoConnect: string[];
  dataLoaded: boolean = false;
  infochecks: boolean[];
  checkResult: string[];


  private baseURL: string = "http://localhost:8080/"
  private userURL: string = "http://localhost:8080/api/user/"
  private adminURL: string = "http://localhost:8080/api/admin/"


  constructor(private httpClient: HttpClient) { }


  public register(user: User): Observable<User> {

    return this.httpClient.post<User>(this.userURL + `register`, user);
  }

  public list(): Observable<User[]> {

    return this.httpClient.get<User[]>(`${this.adminURL}` + `list`);
  }


  public details(token: any): Observable<User> {

    return this.httpClient.get<User>(this.adminURL + `details/${token}`);
  }


  public updateAdmin(user: User, token: String): Observable<User> {

    return this.httpClient.post<User>(this.adminURL + `update/${token}`, user);
  }

  public updateUser(user: User, token: String): Observable<User> {

    return this.httpClient.post<User>(this.userURL + `update/${token}`, user);
  }

  public delete(email: String): Observable<any> {

    return this.httpClient.delete<any>(this.adminURL + `delete/${email}`);
  }

  public forgotPassword(user: User): Observable<Object> {

    return this.httpClient.post<User>(this.userURL + `forgotPassword`, user);
  }

  public changePassword(password: string, token: string, email: string): Observable<Object> {


    return this.httpClient.post<User>(this.userURL + `changePassword`, { 'email': email, 'password': password, 'token': token });
  }

  public connectBD(info: string[]): Observable<boolean> {

    this.infoConnect = info;
    return this.httpClient.post<boolean>(this.userURL + `connectBD`, info);
  }

  public setTime(date: String, info: String): Observable<any[]> {

    let infos: String[] = [];
    infos.push(date);
    infos.push(info);
    return this.httpClient.post<any[]>(this.userURL + `info-time`, infos);
  }

  public getTime(): Observable<String> {
    let email = localStorage.getItem('email')?.replace(/['"]+/g, '');
    return this.httpClient.get(this.userURL + `info-time/${email}`, { responseType: 'text' });  }

  public deleteInfo(info: any): Observable<User> {

    return this.httpClient.post<User>(this.userURL + `delete-info`, info);
  }

  public setReport(report: String, info: String): Observable<any[]> {

    let infos: String[] = [];
    infos.push(report);
    infos.push(info);
    return this.httpClient.post<any[]>(this.userURL + `info-report`, infos);
  }

  public getReport(): Observable<String> {
    let email = localStorage.getItem('email')?.replace(/['"]+/g, '');
    return this.httpClient.get(this.userURL + `info-report/${email}`, { responseType: 'text' });  }

  public checklistConfiguration(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistConfiguration`, infos);
  }

  public checklistNetwork(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistNetwork`, infos);
  }

  public checklistPermission(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistPermission`, infos);
  }

  public checklistPassword(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistPassword`, infos);
  }

  public checklistSession(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistSession`, infos);
  }

  public checklistMaintenance(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistMaintenance`, infos);
  }

  public checklistData(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistData`, infos);
  }

  public checklistRol(listchecks: boolean[], info: string): Observable<any[]> {

    let infos: string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistRol`, infos);
  }


  public setChecklist(info: string[]) {
    this.checkResult = info;
  }

  public getChecklist() {

    return this.checkResult;
  }


  public getBDName(): Observable<string> {
    let email = localStorage.getItem('email')?.replace(/['"]+/g, '');
    return this.httpClient.get(this.userURL + `actual-bd/${email}`, { responseType: 'text' });
  }


  public getCurrentToken(info: any): Observable<User> {

    let infos = info.replace(/"/g, '');

    return this.httpClient.get<User>(this.userURL + `actual-token/${infos}`);
  }

  public setlistchecks(info: boolean[]) {

    this.infochecks = info;
  }

  public getlistchecks() {

    return this.infochecks;
  }




  //Login

  generateToken(user: any) {
    // Supongamos que tienes el token JWT almacenado en la variable userToken

    return this.httpClient.post(this.baseURL + `generate-token`, user);
  }

  //Iniciamos sesion y lo almacenamos en localStorage (guardar el token por un tiempo para la sesion)

  loginUser(token: any) {
    try {
      localStorage.setItem('token', token);
    } catch (error) {
      throw new Error("Token JWT mal formado");
    }
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
  public getEmail() {
    return localStorage.getItem('email');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('rol', JSON.stringify(user.authorities[0].authority));
    localStorage.setItem('email', JSON.stringify(user.email));
    //localStorage.setItem('token', JSON.stringify(user.token));



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