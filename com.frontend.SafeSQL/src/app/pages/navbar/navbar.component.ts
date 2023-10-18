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
  userRole: any = null;
  userToken: any = '';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.updateUserToken();
    this.isLoggedIn = this.userService.isLoggedIn();
    this.user = this.userService.getUser();
    this.userRole = localStorage.getItem('rol');
    this.userService.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.userService.isLoggedIn();
        this.user = this.userService.getUser();

      }
    )

  }


  public updateUserToken(): any {

    setInterval(() => {
      // Coloca aquí el código que deseas ejecutar cada 60 segundos
      this.userService.getCurrentToken(localStorage.getItem('email')).subscribe((user: any) => {
        let userToken = user;

        localStorage.setItem('tokenP', userToken);
      },
        err => {
          this.router.navigate(['user/connection']);
        }
      );
    }, 1000); // 60000 milisegundos = 60 segundos
  }



  public role(){

  if (localStorage.getItem("rol")?.replace(/['"]+/g, '') == "ADMIN") {
    return 'ADMIN';
  } else {
    return 'USER';
  }


}

  public onSubmit(){


    if (this.role() == 'ADMIN') {
      this.router.navigate(['admin/update', localStorage.getItem('tokenP')])

    }

    if (this.role() == 'USER') {
      this.router.navigate(['/user/update', localStorage.getItem('tokenP')])

    }
  
}
  public back() {

  this.userService.deleteInfo(localStorage.getItem('email')?.replace(/"/g, '')).subscribe(data => {
    localStorage.clear();
    this.isLoggedIn = false
    this.userService.logout();
    //window.location.reload();
    this.router.navigate(['']);
  },
    err => {
      console.log(false)
    }
  );


}

}