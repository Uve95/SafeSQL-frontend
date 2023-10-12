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

  isLoggedIn = false;
  userRole:any = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.user = this.userService.getUser();
    this.userRole = this.role();
    this.userService.loginStatusSubject.asObservable().subscribe(
    data => {
     this.isLoggedIn = this.userService.isLoggedIn();
     this.user = this.userService.getUser();
    }
     )
  }




  public role(){

    if(localStorage.getItem("rol")?.replace(/['"]+/g, '') == "ADMIN"){
      return 'ADMIN';
    }else{
      return 'USER';
    }
    

  }

  public userToken(){
    setTimeout(this.userService.getUser().token, 1000);
    return this.userService.getUser().token;
  }

  public back() {
    this.userService.deleteInfo(this.userService.getUser().email)
    localStorage.clear();
    this.isLoggedIn = false
    this.userService.logout();
    //window.location.reload();
    this.router.navigate(['']);

  }

}