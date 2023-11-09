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

  dateFormat: string

  @ViewChild('inform') informeElement: ElementRef;
  date: string;


  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  async ngOnInit() {

    this.getBDName();
    
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

    const elementoInicio = document.getElementById('inform');
    const htmlOriginal = elementoInicio?.outerHTML + document.body.outerHTML;

    const htmlModificado = htmlOriginal
      .replace(/<img.*?alt=["'](.*?)["'].*?>/g, (match, alt) => {
        return alt; // Reemplazar la etiqueta <img> con el texto alternativo
      })
      .replace(/<button.*?<\/button>/g, '') // Eliminar las etiquetas <button>
      .replace("undefined", '') // Eliminar las etiquetas <a>
      .replace("SafeSQL", '')// Eliminar las etiquetas <a>
      .replace(/<p[^>]*>.*?<\/p>/g, '') // Eliminar las etiquetas <p> y su contenido



    let htmlGuardado = htmlModificado.replace(null, '');
    htmlGuardado = `<!-- INICIO -->${htmlGuardado}<!-- FIN -->`;
    let dateFormat = this.date;
    let bdFormat = this.BDName;




    this.userService.setReport(this.userService.getUser().email, htmlGuardado, dateFormat, bdFormat).subscribe((response) => {


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
      .replace("SafeSQL", '')// Eliminar las etiquetas <a>
      .replace(/<p[^>]*>.*?<\/p>/g, '') // Eliminar las etiquetas <p> y su contenido



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

  details(vulnerability: string) {
    const c1 = "La autenticación de Windows es más segura que la autenticación de SQL Server, ya que aprovecha la seguridad integrada en el sistema operativo. Utiliza la autenticación de Windows para las conexiones a SQL Server siempre que sea posible.";
    const c2 = "Comprobar que nadie haya dejado una puerta trasera. Son procedimientos que se arrancan automáticamente con el sistema."
    const c3 = "Los procedimientos almacenados peligrosos en SQL Server suelen ser aquellos que, si se ejecutan de manera inapropiada o sin la debida autorización, pueden tener un impacto negativo en la seguridad, la integridad de los datos o el rendimiento del sistema. Ejemplos(sp_configure, sp_addloggin,sp_droplogin..)"
    const c4 = "La falta de auditorías de acceso en SQL Server puede resultar en una pérdida de visibilidad sobre las actividades en la base de datos, dificultando la detección de intrusiones y la investigación de incidentes. Además, puede llevar a incumplimientos normativos y riesgos de seguridad no detectados, así como dificultar la gestión de cambios y la trazabilidad de las acciones en la base de datos."
    const c5 = "La actualización de SQL Server es crucial para mitigar riesgos de seguridad, garantizar el cumplimiento normativo y optimizar el rendimiento de la base de datos."
    const c6 = "El cifrado de conexiones entrantes es esencial para proteger la seguridad de los datos y garantizar la confidencialidad durante la transferencia. La falta de cifrado puede exponer la información a riesgos de interceptación y acceso no autorizado."
    const c7 = "La autenticación anónima permite el acceso sin autenticación. Deshabilitarla en SQL Server es crucial, ya que puede exponer datos sensibles a accesos no autorizados. Utiliza autenticación sólida, como la autenticación de Windows o la autenticación de SQL Server, para garantizar que los usuarios estén debidamente autenticados antes de acceder a la base de datos."
    const c8 = "El uso de puertos no estándar puede dificultar la administración y la seguridad. Se recomienda utilizar los puertos estándar (por ejemplo, 1433 para SQL Server) para garantizar la interoperabilidad y reducir la exposición a vulnerabilidades. Evitar puertos no estándar simplifica la administración y mantiene la seguridad."
    const c9 = "La implementación de conexiones cifradas con SSL/TLS es fundamental para proteger la confidencialidad de los datos durante la transferencia. SSL/TLS encripta los datos, lo que impide que terceros intercepten la información en tránsito. Asegúrate de configurar y habilitar SSL/TLS en SQL Server para proteger las conexiones remotas."
    const c10 = "Las conexiones a SQL Server deben utilizar métodos de autenticación seguros. Evita el acceso anónimo y utiliza autenticación sólida, como la autenticación de Windows o la autenticación de SQL Server, para garantizar que los usuarios sean quienes dicen ser y tengan permiso para acceder a la base de datos."
    const c11 = "El usuario guest es un usuario predeterminado que a menudo tiene permisos limitados en las bases de datos. Es importante revisar y restringir los permisos de este usuario, ya que podría ser un punto de acceso no deseado a la base de datos. Limita o elimina sus permisos según sea necesario."
    const c12 = " La función de base de datos public contiene a todos los usuarios con acceso a la base de datos. Evita otorgar permisos directamente a esta función, ya que esto podría dar acceso a usuarios no deseados. En su lugar, asigna permisos a roles específicos y usuarios individuales para un control más preciso."
    const c13 = "Establece políticas de contraseñas sólidas que requieran contraseñas complejas con combinaciones de letras, números y caracteres especiales. Además, implementa un período de caducidad y exige cambios de contraseñas periódicos para evitar vulnerabilidades debidas a contraseñas débiles."
    const c14 = "Realiza auditorías regulares de contraseñas para identificar contraseñas débiles o comprometidas. Cambia y refuerza las contraseñas no seguras para mantener la seguridad."
    const c15 = "Implementa políticas de inicio de sesión seguras que incluyan bloqueo de cuentas después de un número específico de intentos fallidos. Esto protege contra ataques de fuerza bruta y aumenta la seguridad del inicio de sesión."
    const c16 = "Elimina o deshabilita los inicios de sesión que ya no son necesarios. Los inicios de sesión no utilizados pueden representar un riesgo potencial y aumentar la superficie de ataque."
    const c17 = "Monitoriza y registra los inicios de sesión fallidos para detectar posibles intentos de acceso no autorizado. Establece alertas para notificar a los administradores sobre actividades sospechosas."
    const c18 = "Crea y sigue un plan de mantenimiento regular que incluya copias de seguridad, actualizaciones de índices y estadísticas, y otras tareas de mantenimiento para mantener el rendimiento y la integridad de la base de datos."
    const c19 = "Mantén copias de seguridad actualizadas y verifica la integridad de los archivos de respaldo. Las copias de seguridad son esenciales para la recuperación ante desastres y la protección de los datos."
    const c20 = "Gestionar la fragmentación de índices es crucial para mantener un rendimiento óptimo. Realiza mantenimiento de índices para reducir la fragmentación y mejorar la eficiencia de las consultas."
    const c21 = "Supervisa y ajusta consultas o procesos que consumen excesiva CPU para mejorar la eficiencia del sistema y garantizar un uso equitativo de recursos."
    const c22 = "Protege datos sensibles mediante cifrado y restricciones de acceso basadas en roles. Implementa políticas de seguridad de datos para proteger la confidencialidad y la integridad de la información."
    const c23 = "Utiliza cifrado para proteger datos confidenciales durante su almacenamiento y transmisión. SQL Server ofrece opciones de cifrado, como Transparent Data Encryption (TDE), para garantizar la seguridad de los datos."
    const c24 = "Limita el número de miembros con el rol sysadmin, que tiene privilegios amplios en SQL Server. Restringe el acceso a este rol para reducir los riesgos de seguridad."
    const c25 = " Asigna roles fijos db_datareader y db_datawriter con precaución, ya que otorgan permisos de lectura y escritura en todas las tablas de la base de datos. Limita el uso de estos roles para evitar accesos innecesarios a los datos."

    const popup = window.open('', 'Detalles', 'width=auto,height=auto,resizable=no,scrollbars=no');

    if (vulnerability == "c1") {
      popup.document.body.innerHTML = `<p>${c1}</p>`;
    }
    if (vulnerability == "c2") {
      popup.document.body.innerHTML = `<p>${c2}</p>`;
    }
    if (vulnerability == "c3") {
      popup.document.body.innerHTML = `<p>${c3}</p>`;
    }
    if (vulnerability == "c4") {
      popup.document.body.innerHTML = `<p>${c4}</p>`;
    }
    if (vulnerability == "c5") {
      popup.document.body.innerHTML = `<p>${c5}</p>`;
    }
    if (vulnerability == "c6") {
      popup.document.body.innerHTML = `<p>${c6}</p>`;
    }
    if (vulnerability == "c7") {
      popup.document.body.innerHTML = `<p>${c7}</p>`;
    }
    if (vulnerability == "c8") {
      popup.document.body.innerHTML = `<p>${c8}</p>`;
    }
    if (vulnerability == "c9") {
      popup.document.body.innerHTML = `<p>${c9}</p>`;
    }
    if (vulnerability == "c10") {
      popup.document.body.innerHTML = `<p>${c10}</p>`;
    }
    if (vulnerability == "c11") {
      popup.document.body.innerHTML = `<p>${c11}</p>`;
    }
    if (vulnerability == "c12") {
      popup.document.body.innerHTML = `<p>${c12}</p>`;
    }
    if (vulnerability == "c13") {
      popup.document.body.innerHTML = `<p>${c13}</p>`;
    }
    if (vulnerability == "c14") {
      popup.document.body.innerHTML = `<p>${c14}</p>`;
    }
    if (vulnerability == "c15") {
      popup.document.body.innerHTML = `<p>${c15}</p>`;
    }
    if (vulnerability == "c16") {
      popup.document.body.innerHTML = `<p>${c16}</p>`;
    }
    if (vulnerability == "c17") {
      popup.document.body.innerHTML = `<p>${c17}</p>`;
    }
    if (vulnerability == "c18") {
      popup.document.body.innerHTML = `<p>${c18}</p>`;
    }
    if (vulnerability == "c19") {
      popup.document.body.innerHTML = `<p>${c19}</p>`;
    }
    if (vulnerability == "c20") {
      popup.document.body.innerHTML = `<p>${c20}</p>`;
    }
    if (vulnerability == "c21") {
      popup.document.body.innerHTML = `<p>${c21}</p>`;
    }
    if (vulnerability == "c22") {
      popup.document.body.innerHTML = `<p>${c22}</p>`;
    }
    if (vulnerability == "c23") {
      popup.document.body.innerHTML = `<p>${c23}</p>`;
    }
    if (vulnerability == "c24") {
      popup.document.body.innerHTML = `<p>${c24}</p>`;
    }
    if (vulnerability == "c25") {
      popup.document.body.innerHTML = `<p>${c25}</p>`;
    }


  }
}



function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



