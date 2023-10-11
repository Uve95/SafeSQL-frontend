import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  showPrincipal = true;
  msgState: string //= "Iniciando análisis ...";
  listchecks: boolean[] = Array.from({ length: 71 }, () => true);
  msgError: boolean;


  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  ngOnInit() {

    this.listchecks = this.userService.getlistchecks();
    console.log(this.listchecks)


    this.showPrincipal = false;

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


    //this.router.navigate(['user/report']);

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





