
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
export class GraphicsComponent implements OnInit {


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
