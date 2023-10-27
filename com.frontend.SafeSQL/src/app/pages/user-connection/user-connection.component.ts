import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { UserChecklistComponent } from '../user-checklist/user-checklist.component';
import { LoadingService } from 'src/app/services/user/loading.service';

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
  date: String;
  nameUser: String;
  reports = []





  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
    public loadingService: LoadingService

  ) {

  }



  ngOnInit(): void {
    this.initForm();
    this.getReport();
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

  getReport(): String {

    this.userService.getReport().subscribe((response) => {

      const cadena = response;
      const cadenaFormat = cadena.replace(/null/gi, "");
      this.reports = cadenaFormat.split('<!-- INICIO -->');

    },
      (err) => {
        console.error(err);
      }
    );



    return this.date;
  }

  lastReports(report:string) {
    const informe = report;
    const popup = window.open('', 'Informe', 'width=600,height=400');
    if (popup) {
      popup.document.body.innerHTML = informe;
    }
  }




}
