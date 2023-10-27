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
  date: String;
  nameUser: String;



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
  ) {


  }


  ngOnInit(): void {
    this.nameUser = this.userService.getUser().name;
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    // Formatea los componentes de fecha y hora como cadenas de dos dígitos
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const hourStr = hour.toString().padStart(2, '0');
    const minuteStr = minute.toString().padStart(2, '0');
    const secondStr = second.toString().padStart(2, '0');

    // Combina los componentes en una cadena de fecha y hora
    this.date = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    this.userService.setTime(this.userService.getUser().email, this.date).subscribe((response) => {

      console.log(response)

    },
      (err) => {
        console.error(err);
      }
    );
  }


  setTime() {

  }

  getTime(): String {

    this.userService.getTime().subscribe((response) => {

      this.date = response;
      if (response = "Primer acceso") {
        this.date = "Primer acceso";
      } else {
        this.date = response;

      }


    },
      (err) => {
        console.error(err);
      }
    );

    return this.date;
  }

}







