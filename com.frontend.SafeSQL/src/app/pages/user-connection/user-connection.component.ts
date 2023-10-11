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



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,
    public loadingService: LoadingService

  ) {

  }



  ngOnInit(): void {
    this.initForm();

  }

  onSubmit() {

    this.nextPage();

  }


  connectBD(): boolean {
    this.userService.connectBD([this.conexionForm.value['cadena'], this.userService.getUser().email]).subscribe(
      dato => {
        this.msgError = false;

        const parts = this.conexionForm.value['cadena'].split(';');
        for (const part of parts) {
          const keyValue = part.split('=');
          if (keyValue.length === 2 && keyValue[0] === 'databaseName') {
            this.userService.setBDName(keyValue[1])
          }

        }

        this.userService.markDataAsLoaded();

      }, err => {

        this.msgError = true
      })

    return this.userService.isDataLoaded();


  }

  nextPage() {

    let dataAvailable = this.connectBD();

    if (dataAvailable) {
      // Los datos están disponibles, puedes navegar a la página principal

      this.router.navigate(['user/dashboard']);
    } else {
      // Los datos aún no están disponibles, puedes mantener al usuario en la página de carga
      this.showPrincipal = false;

      setTimeout(() => {
        // Navega a la página principal una vez que los datos se han cargado
        this.nextPage();
      }, 3000); // Simula una carga de 3 segundos
    }
  }



  initForm() {

    this.conexionForm = this.fb.group({
      cadena: ['', [Validators.required, Validators.pattern("^jdbc:sqlserver://[^;]+;databaseName=[^;]+;user=[^;]+;password=[^;]+;trustServerCertificate=true;$")]],
    })


  }



}
