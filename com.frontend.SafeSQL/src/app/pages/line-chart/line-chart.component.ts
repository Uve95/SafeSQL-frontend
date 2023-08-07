
  import { Component, ViewChild } from '@angular/core';
  import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
  import { BaseChartDirective } from 'ng2-charts';
  import DatalabelsPlugin from 'chartjs-plugin-datalabels';

  
  @Component({
    selector: 'app-pie-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css'],
  })
  export class LineChartComponent {
    // Doughnut

    public doughnutChartData: ChartData<'doughnut'> = {
      datasets: [
        { data: [350, 450, 100] },
        { data: [50, 150, 120] },
        { data: [250, 130, 70] },
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