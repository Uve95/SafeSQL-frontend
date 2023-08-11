
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { ColorFormats } from 'ngx-color-picker/lib/formats';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class Graphics implements OnInit {


  infoSelect: string[]

  checkConfig: string
  checkNetwork: string
  checkPermission: string
  checkPolicy: string
  checkSession: string
  checkMaintenance: string
  checkSensitive: string
  checkRols: string
  check1:string

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }






  ngOnInit(): void {
  }

  
  getChecklist() {

    console.log(this.userService.getChecklist())
    this.infoSelect = this.userService.getChecklist()
    return this.infoSelect;

  }

  getChecklist1():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[0])
  }

  getChecklist2():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[1])
  }

  getChecklist3():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[2])
  }

  getChecklist4():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[3])
  }

  getChecklist5():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[4])
  }

  getChecklist6():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[5])
  }

  getChecklist7():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[6])
  }

  getChecklist8():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[7])
  }

  getChecklist9():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[8])
  }

  getChecklist10():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[9])
  }

  getChecklist11():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[10])
  }

  getChecklist12():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[11])
  }

  getChecklist13():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[12])
  }

  getChecklist14():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[13])
  }

  getChecklist15():number {
    let aux: string[] = this.getChecklist();

    return Number(aux[14])
  }

}
