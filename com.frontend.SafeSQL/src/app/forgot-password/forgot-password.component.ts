import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/model/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPassForm: FormGroup;

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
    this.forgotPassword();
  }


  initForm() {

    this.forgotPassForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?")]]
    })
  }

  forgotPassword(){
    this.userService.forgotPassword(this.forgotPassForm.value).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/userList']);
  }

}


