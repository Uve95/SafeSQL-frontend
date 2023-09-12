import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-report-ok',
  templateUrl: './report-ok.component.html',
  styleUrls: ['./report-ok.component.css']
})
export class ReportOKComponent implements OnInit {


  infoSelect: string[]

  checkConfig: string
  checkNetwork: string
  checkPermission: string
  checkPolicy: string
  checkSession: string
  checkMaintenance: string
  checkSensitive: string
  checkRols: string
  BDName:any

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  ngOnInit() {

  }


  getChecklist() {

    this.infoSelect = this.userService.getChecklist()
    return this.infoSelect;

  }

  getBDName (){

    let aux: string[] = this.getChecklist();

    return aux[0];

  }

  getChecklist1():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[1])
  }

  getChecklist2():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[2])
  }

  getChecklist3():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[3])
  }

  getChecklist4():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[4])
  }

  getChecklist5():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[5])
  }

  getChecklist6():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[6])
  }

  getChecklist7():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[7])
  }

  getChecklist8():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[8])
  }

  getChecklist9():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[9])
  }

  getChecklist10():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[10])
  }

  getChecklist11():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[11])
  }

  getChecklist12():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[12])
  }

  getChecklist13():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[13])
  }

  getChecklist14():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[14])
  }

  getChecklist15():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[15])
  }
}