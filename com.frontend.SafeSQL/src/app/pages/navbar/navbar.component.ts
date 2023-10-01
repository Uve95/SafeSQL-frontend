import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  user: any = null;
  token: any;
  email: any;

  //isLoggedIn = false;
  //userRole:any = null;
  //user:any = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    //this.isLoggedIn = this.userService.isLoggedIn();
    //this.user = this.userService.getUser();
    //this.userRole = this.userService.getUserRole();
    //this.userService.loginStatusSubject.asObservable().subscribe(
    //data => {
    // this.isLoggedIn = this.userService.isLoggedIn();
    // this.user = this.userService.getUser();
    //}
    // )
  }


  public isLoggedIn():boolean {

    if (this.userService.isLoggedIn() == true) {
      return true;
    }
    else {
      return false;
    }

  }

  public userRole(){

    if(localStorage.getItem("rol")?.replace(/['"]+/g, '') == "ADMIN"){
      return 'ADMIN';
    }else{
      return 'USER';
    }
    

  }

  public userToken(){
    setTimeout(this.userToken, 1000);
    return this.userService.getUser().token;
  }

  public back() {
    localStorage.clear();
    this.userService.logout();
    //window.location.reload();
    this.router.navigate(['']);

  }

}