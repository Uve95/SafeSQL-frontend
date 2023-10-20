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



  listchecks: boolean[] = Array.from({ length: 72 }, () => true);
  checkResult: string[] = Array.from({ length: 72 }, () => '');


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
    if (id == "check11") {
      if (event.target.checked) {
        this.listchecks[11] = true;
      } else {
        this.listchecks[11] = false;
      }

    }

    if (id == "check12") {
      if (event.target.checked) {
        this.listchecks[12] = true;
      } else {
        this.listchecks[12] = false;
      }

    }
    if (id == "check13") {
      if (event.target.checked) {
        this.listchecks[13] = true;
      } else {
        this.listchecks[13] = false;
      }

    }
    if (id == "check14") {
      if (event.target.checked) {
        this.listchecks[14] = true;
      } else {
        this.listchecks[14] = false;
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

    if (id == "check51") {
      if (event.target.checked) {
        this.listchecks[51] = true;
      } else {
        this.listchecks[51] = false;
      }

    }

    if (id == "check52") {
      if (event.target.checked) {
        this.listchecks[52] = true;
      } else {
        this.listchecks[52] = false;
      }

    }

    if (id == "check53") {
      if (event.target.checked) {
        this.listchecks[53] = true;
      } else {
        this.listchecks[53] = false;
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

    if (id == "check71") {
      if (event.target.checked) {
        this.listchecks[71] = true;
      } else {
        this.listchecks[71] = false;
      }

    }


    if (this.listchecks[1] == false && this.listchecks[2] == false && this.listchecks[3] == false && this.listchecks[4] == false
      && this.listchecks[5] == false && this.listchecks[6] == false && this.listchecks[10] == false && this.listchecks[11] == false && this.listchecks[12] == false && this.listchecks[13] == false && this.listchecks[14] == false && this.listchecks[20] == false && this.listchecks[21] == false
      && this.listchecks[30] == false && this.listchecks[31] == false && this.listchecks[40] == false && this.listchecks[41] == false
      && this.listchecks[42] == false && this.listchecks[50] == false && this.listchecks[51] == false && this.listchecks[52] == false && this.listchecks[53] == false && this.listchecks[60] == false && this.listchecks[61] == false && this.listchecks[70] == false && this.listchecks[71] == false
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

    if (this.listchecks.filter(elemento => elemento === false).length == 25) {
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
      check11: ['', [Validators.required,]],
      check12: ['', [Validators.required,]],
      check13: ['', [Validators.required,]],
      check14: ['', [Validators.required,]],
      check20: ['', [Validators.required,]],
      check21: ['', [Validators.required,]],
      check30: ['', [Validators.required,]],
      check40: ['', [Validators.required,]],
      check41: ['', [Validators.required,]],
      check42: ['', [Validators.required,]],
      check50: ['', [Validators.required,]],
      check51: ['', [Validators.required,]],
      check52: ['', [Validators.required,]],
      check53: ['', [Validators.required,]],
      check61: ['', [Validators.required,]],
      check70: ['', [Validators.required,]],
      check71: ['', [Validators.required,]]


    })
  }

  onSubmit() {

    this.router.navigate(['/user/report']);

  }



}

