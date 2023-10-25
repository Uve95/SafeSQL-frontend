import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent  implements OnInit {

  error: String;
  msgError: boolean;
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



