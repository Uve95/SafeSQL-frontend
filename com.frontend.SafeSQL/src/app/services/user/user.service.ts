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
  infoSelect: string[];
  infoConnect:string [];
  BDName: any;
  dataLoaded:boolean= false;
  infochecks:boolean[];

  //Endpoint del Backend

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


  public details(email: String): Observable<User> {
    return this.httpClient.get<User>(this.adminURL + `details/${email}`, cabecera);
  }


  public updateAdmin(user: User, email: String): Observable<User> {
    return this.httpClient.put<User>(this.adminURL + `update/${email}`, user);
  }

  public updateUser(user: User, email: String): Observable<User> {
    return this.httpClient.post<User>(this.userURL + `update/${email}`, user);
  }

  public delete(email: String): Observable<any> {
    return this.httpClient.delete<any>(this.adminURL + `delete/${email}`, cabecera);
  }

  public forgotPassword(user: User): Observable<Object> {
    return this.httpClient.post<User>(this.userURL + `forgotPassword`, user);
  }

  public changePassword(password: string, token: string, email: string): Observable<Object> {

    return this.httpClient.post<User>(this.userURL + `changePassword`, { 'email': email, 'password': password, 'token': token });
  }

  public connectBD(info: string []): Observable<User> {

    this.infoConnect = info;
    return this.httpClient.post<User>(this.userURL + `connectBD`, info);
  }

  public checklistConfiguration(listchecks:boolean[], info:string): Observable<any[]> {
 
      let infos:string[] = [];
      infos.push(String(listchecks));
      infos.push(info);

      return this.httpClient.post<any[]>(this.userURL + `checklistConfiguration`, infos);
  }

  public checklistNetwork(listchecks:boolean[], info:string): Observable<any[]> {
 
    let infos:string[] = [];
    infos.push(String(listchecks));
    infos.push(info);

    return this.httpClient.post<any[]>(this.userURL + `checklistNetwork`, infos);
}

public checklistPermission(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistPermission`, infos);
}

public checklistPassword(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistPassword`, infos);
}

public checklistSession(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistSession`, infos);
}

public checklistMaintenance(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistMaintenance`, infos);
}

public checklistData(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistData`, infos);
}

public checklistRol(listchecks:boolean[], info:string): Observable<any[]> {
 
  let infos:string[] = [];
  infos.push(String(listchecks));
  infos.push(info);

  return this.httpClient.post<any[]>(this.userURL + `checklistRol`, infos);
}

  public setChecklist(info:string[]){
    this.infoSelect = info;
    console.log(this.infoSelect)
  }

  public getChecklist(){
    
    return this.infoSelect;
  }


  public setBDName(info:string){
  
    this.BDName = info;
  }

  public getBDName(){

    return this.BDName;
  }

  public setlistchecks(info:boolean[]){
  
    this.infochecks = info;
  }

  public getlistchecks(){

    return this.infochecks;
  }

  markDataAsLoaded() {
    this.dataLoaded = true;
  }

  isDataLoaded(): boolean {
    return this.dataLoaded;
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

  public deleteInfo(info:string) {
 
    return this.httpClient.post(this.baseURL + `delete-info`, info);
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