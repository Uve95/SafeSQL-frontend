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


  getChecklist10():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[10])
  }

  getChecklist20():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[20])
  }

  getChecklist21():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[21])
  }

  getChecklist30():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[30])
  }

  getChecklist31():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[31])
  }

  getChecklist40():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[40])
  }

  getChecklist41():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[41])
  }

  getChecklist42():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[42])
  }

  getChecklist50():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[50])
  }

  getChecklist60():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[60])
  }

  
  getChecklist61():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[61])
  }

  getChecklist70():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[70])
  }
}