import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  msgError: boolean;
  showPassword: boolean = false;
  hidePassword: boolean = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {
  }


  ngOnInit(): void {

    this.initForm();


  }

  onSubmit() {
    this.generateToken();
  }

  show(event: any) {
    if (event) {
      this.showPassword = true;
      this.hidePassword = false;
    } else {
      this.showPassword = false;
      this.hidePassword = true;
    }

  }

  hide(event: any) {
    if (event) {
      this.showPassword = false;
      this.hidePassword = true;
    } else {
      this.showPassword = true;
      this.hidePassword = false;
    }

  }

  initForm() {

    //localStorage.clear()
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")]],
      password: ['',],
    })
  }

  generateToken() {

    this.userService.generateToken(this.loginForm.value).subscribe((data: any) => {

      this.userService.loginUser(data.token);
      this.userService.getCurrentUser().subscribe((user: any) => {
        this.userService.setUser(user);

        if (this.userService.getUserRole() == "USER") {
          localStorage.setItem('rol', 'USER')
          this.router.navigate(['/user/connection'])
          this.userService.loginStatusSubject.next(true);

        }
        else if (this.userService.getUserRole() == 'ADMIN') {
          localStorage.setItem('rol', "ADMIN")
          this.router.navigate(['/admin/dashboard'])
          this.userService.loginStatusSubject.next(true);

        } else {
          this.userService.logout();
        }
      })
    }, err => {

      this.msgError = true
    })
  }
}


