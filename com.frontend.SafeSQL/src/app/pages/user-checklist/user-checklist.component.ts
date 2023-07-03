import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  check1: boolean
  check2: boolean
  check3: boolean
  check4: boolean
  check5: boolean
  check6: boolean
  check7: boolean
  check8: boolean
  check9: boolean
  check10: boolean
  check11: boolean
  check12: boolean
  check13: boolean
  check14: boolean
  check15: boolean



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {
  }


  ngOnInit(): void {

    this.onSubmit();

  }


  onSubmit() {
    this.checklistUser();
  }


  check(): boolean {

    if (this.check1 == true || this.check2 == true || this.check3 == true || this.check4 == true || this.check5 == true || this.check6 == true || this.check7 == true || this.check8 == true || this.check9 == true || this.check10 == true || this.check11 == true || this.check12 == true || this.check13 == true || this.check14 == true || this.check15 == true) {
      return true;
    } else {
      return false;

    }

  }
  checklistUser() {
    this.userService.register(this.checklistForm.value).subscribe(
      dato => {
        this.msgError = false

      }, err => {

        this.msgError = true
      })
  }


}
