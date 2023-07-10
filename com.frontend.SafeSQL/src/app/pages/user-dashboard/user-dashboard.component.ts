import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UserChecklistComponent } from '../user-checklist/user-checklist.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  conexionForm: FormGroup;
  error: string;
  msgError: boolean;
  checklist: UserChecklistComponent;



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {
  }


  ngOnInit(): void {

    this.initForm();
  }

  onSubmit() {

    this.connectBD();
  }

  connectBD() {
    this.userService.connectBD([this.conexionForm.value['cadena'],this.userService.getUser().email]).subscribe(
      dato => {
        this.msgError = false;
        this.router.navigate(['user/checklist']);

        //console.log(dato)

      }, err => {

        this.msgError = true
      })

  }


  initForm() {

    this.conexionForm = this.fb.group({
      cadena: ['', [Validators.required, Validators.pattern("^jdbc:sqlserver://[^;]+;databaseName=[^;]+;user=[^;]+;password=[^;]+;trustServerCertificate=true;$")]],
    })

  
}


}
