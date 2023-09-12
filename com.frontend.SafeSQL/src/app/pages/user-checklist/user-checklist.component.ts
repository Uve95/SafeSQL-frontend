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

  check1: boolean = true;
  check2: boolean = true;
  check3: boolean = true;
  check4: boolean = true;
  check5: boolean = true;
  check6: boolean = true;
  check7: boolean = true;
  check8: boolean = true;
  check9: boolean = true;
  check10: boolean = true;
  check11: boolean = true;
  check12: boolean = true;
  check13: boolean = true;
  check14: boolean = true;
  check15: boolean = true;

  listchecks: boolean[] = [
    this.check1, this.check2, this.check3, this.check4, this.check5, this.check6, this.check7, this.check8, this.check9, this.check10, this.check11, this.check12, this.check13, this.check14, this.check15
  ]

  checks(event: any, id: string) {

    if (id == "check1") {
      if (event.target.checked) {
        this.listchecks[0] = true;
      } else {
        this.listchecks[0] = false;
      }
    }

    if (id == "check2") {
      if (event.target.checked) {
        this.listchecks[1] = true;
      } else {
        this.listchecks[1] = false;
      }

    }

    if (id == "check3") {
      if (event.target.checked) {
        this.listchecks[2] = true;
      } else {
        this.listchecks[2] = false;
      }

    }

    if (id == "check4") {
      if (event.target.checked) {
        this.listchecks[3] = true;
      } else {
        this.listchecks[3] = false;
      }

    }

    if (id == "check5") {
      if (event.target.checked) {
        this.listchecks[4] = true;
      } else {
        this.listchecks[4] = false;
      }

    }

    if (id == "check6") {
      if (event.target.checked) {
        this.listchecks[5] = true;
      } else {
        this.listchecks[5] = false;
      }

    }

    if (id == "check7") {
      if (event.target.checked) {
        this.listchecks[6] = true;
      } else {
        this.listchecks[6] = false;
      }

    }

    if (id == "check8") {
      if (event.target.checked) {
        this.listchecks[7] = true;
      } else {
        this.listchecks[7] = false;
      }

    }

    if (id == "check9") {
      if (event.target.checked) {
        this.listchecks[8] = true;
      } else {
        this.listchecks[8] = false;
      }

    }

    if (id == "check10") {
      if (event.target.checked) {
        this.listchecks[9] = true;
      } else {
        this.listchecks[9] = false;
      }

    }

    if (id == "check11") {
      if (event.target.checked) {
        this.listchecks[10] = true;
      } else {
        this.listchecks[10] = false;
      }

    }

    if (id == "check12") {
      if (event.target.checked) {
        this.listchecks[11] = true;
      } else {
        this.listchecks[11] = false;
      }


    }

    if (id == "check13") {
      if (event.target.checked) {
        this.listchecks[12] = true;
      } else {
        this.listchecks[12] = false;
      }

    }

    if (id == "check14") {
      if (event.target.checked) {
        this.listchecks[13] = true;
      } else {
        this.listchecks[13] = false;
      }

    }

    if (id == "check15") {
      if (event.target.checked) {
        this.listchecks[14] = true;
      } else {
        this.listchecks[14] = false;
      }

    }

    if ( this.listchecks[0] == false && this.listchecks[1] == false && this.listchecks[2] == false && this.listchecks[3] == false && this.listchecks[4] == false
      && this.listchecks[5] == false && this.listchecks[6] == false && this.listchecks[7] == false && this.listchecks[8] == false
      && this.listchecks[9] == false && this.listchecks[10] == false && this.listchecks[11] == false && this.listchecks[12] == false
      && this.listchecks[13] == false && this.listchecks[14] == false)  {

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


  ngOnInit(): void {

    this.initForm();

  }

  initForm() {

    this.checklistForm = this.fb.group({
      check1: ['', [Validators.required,]],
      check2: ['', [Validators.required,]],
      check3: ['', [Validators.required,]],
      check4: ['', [Validators.required,]],
      check5: ['', [Validators.required,]],
      check6: ['', [Validators.required,]],
      check7: ['', [Validators.required,]],
      check8: ['', [Validators.required,]],
      check9: ['', [Validators.required,]],
      check10: ['', [Validators.required,]],
      check11: ['', [Validators.required,]],
      check12: ['', [Validators.required,]],
      check13: ['', [Validators.required,]],
      check14: ['', [Validators.required,]],
      check15: ['', [Validators.required,]]


    })
  }

  onSubmit() {
    console.log(this.listchecks)
    this.checklistUser();
  }



  checklistUser() {

    this.userService.checklist(this.listchecks, this.userService.getUser().email).subscribe(
      dato => {
        this.msgError = false
        let info: string[] = dato;
        this.userService.setChecklist(info);
        this.router.navigate(['user/report']);


      }, err => {

        this.msgError = true

      })
  }



}
