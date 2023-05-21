import { group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/user/user';
import { UserService } from 'src/model/user/user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user: User = new User();
  ChangePasswordForm: FormGroup;
  email: any 

  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
    private route:ActivatedRoute

    
  ) {



  }


  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      if(params.has("email")){
        this.email = params.get("email") ;
      }
    })
    this.initForm();

  }


  onSubmit() {
    this.changePassword();
  }


  initForm() {

    this.ChangePasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.pattern("(?=.*[! # $ % & ' ( ) * + , - . / : ; = > ? @ \  ^ _` { | } ~])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}")]],
      passwordConfirm: ['', [Validators.required, Validators.pattern("(?=.*[! # $ % & ' ( ) * + , - . / : ; = > ? @ \  ^ _` { | } ~])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}")]]
    })
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordConfirm'].value;

    if (pass == confirmPass)
      return true;
    else
      return false;

  }

  
  changePassword(){

    this.userService.changePassword(this.ChangePasswordForm.value['password'], this.email).subscribe(result => this.gotoChangePassword());
  }
 
  gotoChangePassword() {
    this.router.navigate(['/']);
  }
}
