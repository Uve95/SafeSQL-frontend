import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-checklist',
  templateUrl: './user-checklist.component.html',
  styleUrls: ['./user-checklist.component.css']
})
export class UserChecklistComponent implements OnInit {

  checklistForm: FormGroup;
  msgError: boolean;
  msgOpt: boolean = false;
  showPrincipal = true;
  msgState: string = "Iniciando análisis ...";



  listchecks: boolean[] = Array.from({ length: 71 }, () => true);


  checks(event: any, id: string) {

    //Configuración

    if (id == "check1") {
      if (event.target.checked) {
        this.listchecks[1] = true;
      } else {
        this.listchecks[1] = false;
      }
    }

    if (id == "check2") {
      if (event.target.checked) {
        this.listchecks[2] = true;
      } else {
        this.listchecks[2] = false;
      }

    }

    if (id == "check3") {
      if (event.target.checked) {
        this.listchecks[3] = true;
      } else {
        this.listchecks[3] = false;
      }

    }

    if (id == "check4") {
      if (event.target.checked) {
        this.listchecks[4] = true;
      } else {
        this.listchecks[4] = false;
      }

    }

    if (id == "check5") {
      if (event.target.checked) {
        this.listchecks[5] = true;
      } else {
        this.listchecks[5] = false;
      }

    }

    //Red

    if (id == "check10") {
      if (event.target.checked) {
        this.listchecks[10] = true;
      } else {
        this.listchecks[10] = false;
      }

    }

    //Permisos

    if (id == "check20") {
      if (event.target.checked) {
        this.listchecks[20] = true;
      } else {
        this.listchecks[20] = false;
      }

    }

    if (id == "check21") {
      if (event.target.checked) {
        this.listchecks[21] = true;
      } else {
        this.listchecks[21] = false;
      }

    }

    //Politica de contraseñas

    if (id == "check30") {
      if (event.target.checked) {
        this.listchecks[30] = true;
      } else {
        this.listchecks[30] = false;
      }

    }

    if (id == "check31") {
      if (event.target.checked) {
        this.listchecks[31] = true;
      } else {
        this.listchecks[31] = false;
      }

    }

    //Revision de inicios de sesion

    if (id == "check40") {
      if (event.target.checked) {
        this.listchecks[40] = true;
      } else {
        this.listchecks[40] = false;
      }

    }

    if (id == "check41") {
      if (event.target.checked) {
        this.listchecks[41] = true;
      } else {
        this.listchecks[41] = false;
      }


    }

    if (id == "check42") {
      if (event.target.checked) {
        this.listchecks[42] = true;
      } else {
        this.listchecks[42] = false;
      }

    }

    //Mantenimiento

    if (id == "check50") {
      if (event.target.checked) {
        this.listchecks[50] = true;
      } else {
        this.listchecks[50] = false;
      }

    }

    //Datos sensibles

    if (id == "check60") {
      if (event.target.checked) {
        this.listchecks[60] = true;
      } else {
        this.listchecks[60] = false;
      }
    }

    if (id == "check61") {
      if (event.target.checked) {
        this.listchecks[61] = true;
      } else {
        this.listchecks[61] = false;
      }

    }

    //Roles

    if (id == "check70") {
      if (event.target.checked) {
        this.listchecks[70] = true;
      } else {
        this.listchecks[70] = false;
      }

    }


    if (this.listchecks[1] == false && this.listchecks[2] == false && this.listchecks[3] == false && this.listchecks[4] == false
      && this.listchecks[5] == false && this.listchecks[6] == false && this.listchecks[10] == false && this.listchecks[20] == false && this.listchecks[21] == false
      && this.listchecks[30] == false && this.listchecks[31] == false && this.listchecks[40] == false && this.listchecks[41] == false
      && this.listchecks[42] == false && this.listchecks[50] == false && this.listchecks[60] == false && this.listchecks[61] == false && this.listchecks[70] == false
    ) {

      this.msgOpt = true;

    } else {
      this.msgOpt = false;
    }

  }

  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {
  }

  valid() {

    console.log(this.listchecks)

    if (this.listchecks.filter(elemento => elemento === false).length == 17) {
      return false;
    } else {
      return true;
    }


  }
  ngOnInit(): void {

    this.initForm()
    this.userService.setlistchecks(this.listchecks)

  }

  initForm() {

    this.checklistForm = this.fb.group({
      check1: ['', [Validators.required,]],
      check2: ['', [Validators.required,]],
      check3: ['', [Validators.required,]],
      check4: ['', [Validators.required,]],
      check5: ['', [Validators.required,]],
      check10: ['', [Validators.required,]],
      check20: ['', [Validators.required,]],
      check21: ['', [Validators.required,]],
      check30: ['', [Validators.required,]],
      check40: ['', [Validators.required,]],
      check41: ['', [Validators.required,]],
      check42: ['', [Validators.required,]],
      check50: ['', [Validators.required,]],
      check61: ['', [Validators.required,]],
      check70: ['', [Validators.required,]]


    })
  }

  onSubmit() {


    /*this.showPrincipal = false;


    if (this.listchecks[1] == true || this.listchecks[2] == true || this.listchecks[3] == true || this.listchecks[4] == true || this.listchecks[5] == true) {

      this.checklistConfiguration();
      this.msgState = "Analizando la configuración ..."
    }

    if (this.listchecks[10] == true) {

      this.checklistNetwork();
      this.msgState = "Revisando las conexiones de red ..."

    }

    if (this.listchecks[20] == true || this.listchecks[21] == true) {

      this.checklistPermission();
      this.msgState = "Chequeando permisos ..."

    }

    if (this.listchecks[30] == true || this.listchecks[31] == true || this.listchecks[3] == true || this.listchecks[4] == true || this.listchecks[5] == true) {

      this.checklistPassword();
      this.msgState = "Verificando politicas de contraseñas ..."

    }

    if (this.listchecks[40] == true || this.listchecks[41] == true || this.listchecks[42] == true) {

      this.checklistSession();
      this.msgState = "Analizando inicios de sesión ..."

    }
    if (this.listchecks[50] == true) {

      this.checklistMaintenance();
      this.msgState = "Comprobando el plan de mantenimiento ..."

    }

    if (this.listchecks[60] == true || this.listchecks[61] == true) {

      this.checklistData();

      this.msgState = "Detectando si existen datos sensibles ..."

    }

    if (this.listchecks[70] == true) {

      this.checklistRol();
      this.msgState = "Revisando roles ..."

    }

    this.showPrincipal = true;
    */

    this.router.navigate(['/user/report']);

  }



  checklistConfiguration() {

    console.log(this.listchecks.values)
    console.log(this.userService.getUser().email)
    this.userService.checklistConfiguration(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })
  }



  checklistNetwork() {


    this.userService.checklistNetwork(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })
  }


  checklistPermission() {

    this.userService.checklistPermission(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })
  }



  checklistPassword() {

    this.userService.checklistPassword(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })
  }





  checklistSession() {

    this.userService.checklistSession(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })
  }


  checklistMaintenance() {

    this.userService.checklistMaintenance(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })

  }

  checklistData() {

    this.userService.checklistData(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })

    console.log(this.userService.getChecklist())
  }


  checklistRol() {

    this.userService.checklistRol(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: any = dato;
        this.userService.setChecklist(info);


      }, err => {

        this.msgError = true

      })


  }
}



