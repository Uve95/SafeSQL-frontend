import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  error: String;
  msgError: boolean;
  BDName: any;
  showPrincipal = true; // Muestra la capa de carga inicialmente
  date: any;
  nameUser: String;
  dateFormat: Date;
  showDate : boolean;


  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {


  }


  ngOnInit(): void {
    this.nameUser = this.userService.getUser().name;
    console.log(this.showDate)

  }



  getTime(): boolean {

    this.userService.getTime().subscribe((response) => {

      this.date = response;
      this.dateFormat = new Date(this.date)
      this.showDate = true
      console.log(this.showDate)
      return this.showDate


    },
      (err) => {
        console.error(err);
      }
    );

    return this.showDate
  }

}







