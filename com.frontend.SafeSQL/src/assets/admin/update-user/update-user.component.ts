import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/model/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  user: any = null;
  userUpdate: FormGroup;
  email: String;
  msgError: boolean;


  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private readonly fb: FormBuilder

    ) { }


    ngOnInit() {
      this.email = this.activatedRoute.snapshot.params['email'];
      this.userService.details(this.email).subscribe(data => {
        this.user = data;
      },
        err => {
          this.router.navigate(['']);
        }
      );
     this.initForm();
    }
 

    initForm() {

      this.userUpdate = this.fb.group({
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
    const email = this.activatedRoute.snapshot.params['email'];
    this.userService.update(this.userUpdate.value, email).subscribe(dato=>{
      console.log(dato);
      this.msgError = false


    }, err => {

      this.msgError = true
    })
  }

  back(): void {
    window.history.back();
  }

}


