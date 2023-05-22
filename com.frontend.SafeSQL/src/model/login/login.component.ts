import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/model/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

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
    this.loginUser();
  }

  
  loginUser(){

    this.userService.loginUser(this.loginForm.value).subscribe(dato=>{
      console.log(dato)
      this.loginUsesr();
    }, err => {

        this.msgError = true
    })
}


loginUsesr(){
  this.router.navigate(['/userList']);

}

  initForm() {

    this.loginForm = this.fb.group({

      email: ['',],
      password: ['',],
    })
  }


}
