import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


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

  public logout(){
    this.userService.logout();
    window.location.reload();
  }

}
