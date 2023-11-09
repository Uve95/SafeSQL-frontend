import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  BDName: any;
  info: any;
  server: any;
  database: any;
  date: string;
  user: any;
  showPrincipal = true; // Muestra la capa de carga inicialmente



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {


  }


  ngOnInit(): void {
    this.getInfo();

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const hourStr = hour.toString().padStart(2, '0');
    const minuteStr = minute.toString().padStart(2, '0');
    const secondStr = second.toString().padStart(2, '0');

    this.date = `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;

  }



  getInfo() {
    this.userService.getInfo().subscribe((response) => {

      this.info = response;
      this.info = this.info.split(';');
      this.server = this.info[0];
      this.server = this.server.replace('jdbc:sqlserver://', '')
      this.database = this.info[1];
      this.database = this.database.replace('databaseName=','')
      this.user = this.info[2];
      this.user = this.user.replace('user=','')


      



    },
      (err) => {
        console.error(err);
      }
    );


  }

}



