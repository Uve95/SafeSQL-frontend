import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  //isLoggedIn = false;
  //userRole:any = null;
  //user:any = null;

  constructor(
    private userService: UserService,
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

  public userRole():string{

    console.log(this.userService.getUserRole())

    if(this.userService.getUserRole() == "ADMIN"){
      return "ADMIN";
    }else{
      return "USER";
    }

  }

  public userEmail():string{
    return this.userService.getUser().email;
  }

  public back() {
    this.userService.logout();
    //window.location.reload();
    this.router.navigate(['']);

  }

}