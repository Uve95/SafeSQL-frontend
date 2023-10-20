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
  error: String;
  msgError: boolean;
  checklist: UserChecklistComponent;
  BDName:any;
  showPrincipal = true; // Muestra la capa de carga inicialmente



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {

   
  }


  ngOnInit(): void {
    this.getBDName();
    console.log(this.BDName)

  }



  getBDName() {
    this.userService.getBDName().subscribe(  (response) => {

      this.BDName = response;
       
  
      },
      (err) => {
        console.error(err);
      }
    );
  }
  

  
}



