import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  showPrincipal = true;
  msgState: string = "Iniciando análisis ...";
  listchecks: boolean[] = Array.from({ length: 72 }, () => true);
  checkResult: string[] = Array.from({ length: 72 }, () => '');

  msgError: boolean;
  infoSelect: string[]

  checkConfig: string
  checkNetwork: string
  checkPermission: string
  checkPolicy: string
  checkSession: string
  checkMaintenance: string
  checkSensitive: string
  checkRols: string
  BDName: any

  @ViewChild('inform') informeElement: ElementRef;


  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  async ngOnInit() {

    this.showPrincipal = false;

    this.listchecks = this.userService.getlistchecks();

    await delay(2000);


    if (this.checklistConfiguration()) {

      this.msgState = "Error al analizar la configuración ..."
      this.updateMessage(this.msgState);
      await delay(2000);

    }
    else {

      if (this.listchecks[1] == true || this.listchecks[2] == true || this.listchecks[3] == true || this.listchecks[4] == true || this.listchecks[5] == true) {
        this.msgState = "Analizando la configuración ..."
        this.updateMessage(this.msgState);
        await delay(2000);

      }
    }

    await delay(2000);

    if (this.checklistNetwork()) {

      this.msgState = "Error al revisar las conexiones de red ..."
      this.updateMessage(this.msgState);
      await delay(2000);
    }
    else {

      if (this.listchecks[10] == true || this.listchecks[11] == true || this.listchecks[12] == true || this.listchecks[13] == true || this.listchecks[14] == true) {

        this.msgState = "Revisando las conexiones de red ..."
        this.updateMessage(this.msgState);
        await delay(2000);
      }

    }
    await delay(2000);

    if (this.checklistPermission()) {

      this.msgState = "Error al chequear permisos ..."
      this.updateMessage(this.msgState);
      await delay(2000);
    }
    else {

      if (this.listchecks[20] == true || this.listchecks[21] == true) {

        this.msgState = "Chequeando permisos ..."
        this.updateMessage(this.msgState);
        await delay(2000);

      }
    }
    if (this.checklistPassword()) {

      this.msgState = "Error al verificar politicas de contraseñas ..."
      this.updateMessage(this.msgState);
      await delay(2000);
    }
    else {

      if (this.listchecks[30] == true || this.listchecks[31] == true) {

        this.msgState = "Verificando politicas de contraseñas ..."
        this.updateMessage(this.msgState);
        await delay(2000);
      }


    }
    if (this.checklistSession()) {

      this.msgState = "Error al analizar inicios de sesión ..."
      this.updateMessage(this.msgState);
      await delay(2000);

    }
    else {

      if (this.listchecks[40] == true || this.listchecks[41] == true || this.listchecks[42] == true) {

        this.msgState = "Analizando inicios de sesión ..."
        this.updateMessage(this.msgState);
        await delay(2000);


      }
    }
    if (this.checklistMaintenance()) {

      this.msgState = "Error al comprobar si existe plan de mantenimiento ..."
      this.updateMessage(this.msgState);
      await delay(2000);

    }
    else {

      if (this.listchecks[50] == true || this.listchecks[51] == true || this.listchecks[52] == true || this.listchecks[53] == true) {

        this.msgState = "Comprobando el plan de mantenimiento ..."
        this.updateMessage(this.msgState);
        await delay(2000);


      }
    }
    if (this.checklistData()) {

      this.msgState = "Error al revisar si existen datos sensibles ..."
      this.updateMessage(this.msgState);
      await delay(2000);

    }
    else {


      if (this.listchecks[60] == true || this.listchecks[61] == true) {

        this.msgState = "Detectando si existen datos sensibles ..."
        this.updateMessage(this.msgState);
        await delay(2000);


      }
    }
    if (this.checklistRol()) {

      this.msgState = "Error al revisar roles ..."
      this.updateMessage(this.msgState);
      await delay(2000);

    }
    else {

      if (this.listchecks[70] == true || this.listchecks[71] == true) {

        this.msgState = "Revisando roles ..."
        this.updateMessage(this.msgState);
        await delay(2000);

      }

    }

    await delay(2000);

    this.showPrincipal = true;

  }



  checklistConfiguration(): boolean {

    this.userService.checklistConfiguration(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true


      })

    return this.msgError;

  }



  checklistNetwork(): boolean {


    this.userService.checklistNetwork(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);



      }, err => {

        this.msgError = true


      })

    return this.msgError;

  }


  checklistPermission(): boolean {

    this.userService.checklistPermission(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })

    return this.msgError;
  }



  checklistPassword(): boolean {
    this.userService.checklistPassword(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })
    return this.msgError;
  }





  checklistSession(): boolean {

    this.userService.checklistSession(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })

    return this.msgError;
  }


  checklistMaintenance(): boolean {

    this.userService.checklistMaintenance(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })

    return this.msgError;

  }

  checklistData(): boolean {

    this.userService.checklistData(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })

    return this.msgError;

  }


  checklistRol(): boolean {

    this.userService.checklistRol(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        this.checkResult = dato;
        this.userService.setChecklist(this.checkResult);


      }, err => {

        this.msgError = true

      })

    return this.msgError;

  }

  updateMessage(msgState: string) {
    // Simula una actualización de contenido cada 2 segundos
    setInterval(() => {
      msgState = msgState + new Date().toLocaleTimeString();
    }, 2000);
  }


  getChecklist() {

    this.infoSelect = this.userService.getChecklist()
    return this.infoSelect;

  }

  getBDName() {
    this.userService.getBDName().subscribe((response) => {

      this.BDName = response;


    },
      (err) => {
        console.error(err);
      }
    );
  }

  getChecklist1(): any {

    return this.checkResult[1];
  }

  getChecklist2(): any {
    return this.checkResult[2];

  }

  getChecklist3(): any {
    return this.checkResult[3];

  }

  getChecklist4(): any {
    return this.checkResult[4];

  }

  getChecklist5(): any {
    return this.checkResult[5];

  }


  getChecklist10(): any {
    return this.checkResult[10];

  }

  getChecklist11(): any {
    return this.checkResult[11];

  }
  getChecklist12(): any {
    return this.checkResult[12];

  }

  getChecklist13(): any {
    return this.checkResult[13];

  }
  getChecklist14(): any {
    return this.checkResult[14];

  }


  getChecklist20(): any {
    return this.checkResult[20];

  }

  getChecklist21(): any {
    return this.checkResult[21];

  }

  getChecklist30(): any {
    return this.checkResult[30];

  }

  getChecklist31(): any {
    return this.checkResult[31];

  }

  getChecklist40(): any {
    return this.checkResult[40];

  }

  getChecklist41(): any {
    return this.checkResult[41];

  }

  getChecklist42(): any {
    return this.checkResult[42];

  }

  getChecklist50(): any {
    return this.checkResult[50];

  }

  getChecklist51(): any {
    return this.checkResult[51];

  }
  getChecklist52(): any {
    return this.checkResult[52];

  }
  getChecklist53(): any {
    return this.checkResult[53];

  }

  getChecklist60(): any {
    return this.checkResult[60];

  }


  getChecklist61(): any {
    return this.checkResult[61];

  }

  getChecklist70(): any {
    return this.checkResult[70];

  }

  getChecklist71(): any {
    return this.checkResult[71];

  }

  saveReport() {

    // Obtener el contenido del documento HTML
    const elementoInicio = document.getElementById('inform');
    const htmlOriginal = elementoInicio?.outerHTML + document.body.outerHTML;

    const htmlModificado = htmlOriginal
      .replace(/<img.*?alt=["'](.*?)["'].*?>/g, (match, alt) => {
        return alt; // Reemplazar la etiqueta <img> con el texto alternativo
      })
      .replace(/<button.*?<\/button>/g, '') // Eliminar las etiquetas <button>
      .replace("undefined", '') // Eliminar las etiquetas <a>
      .replace("SafeSQL", '');// Eliminar las etiquetas <a>



      let htmlGuardado = htmlModificado.replace(null,'');
       htmlGuardado = `<!-- INICIO -->${htmlGuardado}<!-- FIN -->`;

      this.userService.setReport(this.userService.getUser().email, htmlGuardado).subscribe((response) => {

        console.log(response)
  
      },
        (err) => {
          console.error(err);
        }
      );

   
  }

  
  downloadReport() {

    this.saveReport();

    // Obtener el contenido del documento HTML
    const elementoInicio = document.getElementById('inform');
    const htmlOriginal = elementoInicio?.outerHTML + document.body.outerHTML;

    const htmlModificado = htmlOriginal
      .replace(/<img.*?alt=["'](.*?)["'].*?>/g, (match, alt) => {
        return alt; // Reemplazar la etiqueta <img> con el texto alternativo
      })
      .replace(/<button.*?<\/button>/g, '') // Eliminar las etiquetas <button>
      .replace("undefined", '') // Eliminar las etiquetas <a>
      .replace("SafeSQL", '');// Eliminar las etiquetas <a>


    // Crear un enlace para descargar el HTML modificado
    const blob = new Blob([htmlModificado], { type: 'text/html' });

    const url = window.URL.createObjectURL(blob);

    // Crea un enlace temporal para la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SafeSQLReport.html';
    a.click();

    // Libera los recursos
    window.URL.revokeObjectURL(url);
  }


  shareOnWhatsApp() {


    const textToShare = 'Echa un vistazo a este reporte obtenido por SafeSQL';
    const whatsappLink = `https://web.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;

    window.open(whatsappLink);
  }

  newReport() {
    this.router.navigate(['/user/connection'])

  }
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



