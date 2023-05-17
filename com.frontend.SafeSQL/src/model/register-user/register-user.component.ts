import { group } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/model/user/user';
import { UserService } from 'src/model/user/user.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  userForm: FormGroup;

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
    this.registerUser();
  }


  initForm() {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")]],
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

  registerUser(){
    this.userService.registerUser(this.userForm.value).subscribe(dato=>{
      console.log(dato);
      this.updateListUser();

    }, error => console.log(error));
  }

  updateListUser(){
    this.router.navigate(['/userList']);
  }
}
