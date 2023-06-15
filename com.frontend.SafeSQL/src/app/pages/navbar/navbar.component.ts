import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  isLoggedIn = false;
  user:any = null;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
    this.user = this.userService.getUser();
    this.userService.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.userService.isLoggedIn();
        this.user = this.userService.getUser();
      }
    )
  }

  public back(){
    this.userService.logout();
    window.location.reload();
  }

}