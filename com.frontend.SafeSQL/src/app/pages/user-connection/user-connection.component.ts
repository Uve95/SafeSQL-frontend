import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UserChecklistComponent } from '../user-checklist/user-checklist.component';

@Component({
  selector: 'app-user-connection',
  templateUrl: './user-connection.component.html',
  styleUrls: ['./user-connection.component.css']
})
export class UserConnectionComponent implements OnInit {

  conexionForm: FormGroup;
  error: string;
  msgError: boolean;
  checklist: UserChecklistComponent;
  showPrincipal = true;
  date: any;
  dateFormat: Date
  nameUser: String;
  showDate: boolean;





  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,

  ) {

  }



  ngOnInit(): void {
    this.initForm();
    this.nameUser = this.userService.getUser().name;

  }

  onSubmit() {

    this.connectBD();

  }


  connectBD() {
    this.showPrincipal = false;

    this.userService.connectBD([this.conexionForm.value['cadena'], this.userService.getUser().email])
      .subscribe(
        dato => {

          if (dato == true) {

            this.msgError = false;
            this.showPrincipal = true;
            this.router.navigate(['user/dashboard']);
          } else {
            this.showPrincipal = true;
            this.msgError = true;

          }

        },
        err => {
          // Manejar errores del servidor
          this.msgError = true;
          this.showPrincipal = true;
          console.error("Error:", err);

          // Opcional: Si no deseas reintentar automáticamente, elimina este bloque.
          setTimeout(() => {
            this.connectBD(); // Reintenta la conexión después de un tiempo
          }, 3000); // Simula una carga de 3 segundos
        }
      );
  }








  initForm() {

    this.conexionForm = this.fb.group({
      cadena: ['', [Validators.required, Validators.pattern("^jdbc:sqlserver://[^;]+;databaseName=[^;]+;user=[^;]+;password=[^;]+;trustServerCertificate=true;$")]],
    })


  }

  getTime(): boolean {

    this.userService.getTime().subscribe((response) => {

      this.date = response;
      this.dateFormat = new Date(this.date)
      this.showDate = true
      return this.showDate


    },
      (err) => {
        console.error(err);
      }
    );

    return this.showDate
  }





}
