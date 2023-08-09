
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
})
export class Graphics implements OnInit {
  // Doughnut


  infoSelect: string[]

  checkConfig: string
  checkNetwork: string
  checkPermission: string
  checkPolicy: string
  checkSession: string
  checkMaintenance: string
  checkSensitive: string
  checkRols: string
  dataRols:number


  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  getChecklist() {

    console.log(this.userService.getChecklist())
    this.infoSelect = this.userService.getChecklist()
    return this.infoSelect;

  }


  ngOnInit(): void {

    this.graphicConfig();
    this.graphicMaintenance();
    this.graphicNetwork();
    this.graphicPermission();
    this.graphicPolicy();
    this.graphicRols();
    this.graphicSensitive();
    this.graphicSession();

  }
  graphicConfig() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 3;
    let auxOK = 0;

    if (aux[0] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[1] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[2] == "-1")
      auxTotal = auxTotal - 1;


    if (aux[0] == "0")
      auxOK = auxOK + 1;

    if (aux[1] == "0")
      auxOK = auxOK + 1;

    if (aux[2] == "0")
      auxOK = auxOK + 1;



    this.checkConfig = auxOK + "/" + auxTotal;

  }

  graphicNetwork() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 1;
    let auxOK = 0;

    if (aux[3] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[3] == "0")
      auxOK = auxOK + 1;

    this.checkNetwork = auxOK + "/" + auxTotal;

  }


  graphicPermission() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 2;
    let auxOK = 0;

    if (aux[4] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[5] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[4] == "0")
      auxOK = auxOK + 1;

    if (aux[5] == "0")
      auxOK = auxOK + 1;

    this.checkPermission = auxOK + "/" + auxTotal;

  }

  graphicPolicy() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 2;
    let auxOK = 0;

    if (aux[6] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[7] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[6] == "0")
      auxOK = auxOK + 1;

    if (aux[7] == "0")
      auxOK = auxOK + 1;

    this.checkPolicy = auxOK + "/" + auxTotal;

  }

  graphicSession() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 3;
    let auxOK = 0;

    if (aux[8] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[9] == "-1")
      auxTotal = auxTotal - 1;
    if (aux[10] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[8] == "0")
      auxOK = auxOK + 1;

    if (aux[9] == "0")
      auxOK = auxOK + 1;
    if (aux[10] == "0")
      auxOK = auxOK + 1;

    this.checkSession = auxOK + "/" + auxTotal;

  }

  graphicMaintenance() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 1;
    let auxOK = 0;

    if (aux[11] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[11] == "0")
      auxOK = auxOK + 1;

    this.checkMaintenance = auxOK + "/" + auxTotal;

  }

  graphicSensitive() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 2;
    let auxOK = 0;

    if (aux[12] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[13] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[12] == "0")
      auxOK = auxOK + 1;

    if (aux[13] == "0")
      auxOK = auxOK + 1;

    this.checkSensitive = auxOK + "/" + auxTotal;

  }

  graphicRols() {

    let aux: string[] = this.getChecklist();

    let auxTotal = 1;
    let auxOK = 0;

    if (aux[14] == "-1")
      auxTotal = auxTotal - 1;

    if (aux[14] == "0")
      auxOK = auxOK + 1;

    this.checkRols = auxOK + "/" + auxTotal;
    let auxdata = this.checkRols.split("/")
    this.dataRols = Number(auxdata[0])

  }

  doughnutChartDataConfig: ChartData<'doughnut'> = {
    

    datasets: [ 

      {
        data: [this.da],
        backgroundColor: 'green'
      }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
    console.log(event, active);
  }
}