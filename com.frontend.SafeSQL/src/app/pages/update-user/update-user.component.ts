import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  user: any = null;
  userUpdateForm: FormGroup;
  email: any;
  name : String;
  surname : String;
  password : String;

  msgError: boolean;
  token:String


  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly fb: FormBuilder

    ) { }


    ngOnInit() {

      this.userService.details(localStorage.getItem('tokenP')).subscribe(data => {
        this.user = data;
        this.name = data.name;
        this.surname = data.surname;
        this.email = data.email;

      },
        err => {
          //this.router.navigate(['/user/connection'])
        }
      );

     this.initForm();
    }
 

    initForm() {

      this.userUpdateForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        surname: ['', [Validators.required, Validators.minLength(3)]],
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


  updateUser(): void {
    this.userService.updateUser(this.userUpdateForm.value, this.userService.getUser().token).subscribe(dato=>{
      console.log(dato);
      this.msgError = false


    }, err => {

      this.msgError = true
    })
  }

  back(): void {
    this.router.navigate(['/user/connection'])

  }

}


