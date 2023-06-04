import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/model/user/user.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  msgError: boolean;


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





  initForm() {

    this.loginForm = this.fb.group({
      email: ['',],
      password: ['',],
    })
  }

  generateToken() {

    this.userService.generateToken(this.loginForm.value).subscribe((data: any) => {
      console.log(data)

      this.userService.loginUser(data.token);
      this.userService.getCurrentUser().subscribe((user: any) => {
        this.userService.setUser(user);
        console.log(user);

        if (this.userService.getUserRole() == "USER") {
          window.location.href = 'user/list';
          //this.router.navigate([''])
          this.userService.loginStatusSubject.next(true);

        } else if (this.userService.getUserRole() == "ADMIN") {
          window.location.href = 'user/forgotPassword';
          this.userService.loginStatusSubject.next(true);

        }else{
          this.userService.logout();
        }
      })
    }, err => {

      console.log(err)

      this.msgError = true
    })
  }
}


