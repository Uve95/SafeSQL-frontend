import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.component.html',
  styleUrls: ['./report-history.component.css']
})
export class ReportHistoryComponent implements OnInit {


  date: String;
  info: any;
  database: any;
  reports: string [];
  date_reports: string [];
  bdname: string [];



  constructor(
    private userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder,

  ) {

  }


  ngOnInit(): void {
    this.getReport();

  }


  getReport() {

    this.userService.getReport().subscribe((response) => {

      const report = response[0];
      const date_report = response[1];
      const bdname = response[2];


      const cadenaFormat = report.replace(/NULL/gi, "");
      this.reports = cadenaFormat.split('<!-- INICIO -->');

      const cadenaFormat1 = date_report.replace(/NULL/gi, "");
      this.date_reports = cadenaFormat1.split(';');

      const cadenaFormat2 = bdname.replace(/NULL/gi, "");
      this.bdname = cadenaFormat2.split(';');

    },
      (err) => {
        console.error(err);
      }
    );

  }

  getBDname() {
    this.userService.getInfo().subscribe((response) => {

      this.info = response;
      this.info = this.info.split(';');
      this.database = this.info[1];
      this.database = this.database.replace('databaseName=', '')


    },
      (err) => {
        console.error(err);
      }
    );

    return this.database;
  }

  lastReports(report: string) {
    const informe = report;
    const popup = window.open('', 'Informe', 'width=600,height=400');
    if (popup) {
      popup.document.body.innerHTML = informe;
    }
  }

  back(): void {
    this.router.navigate(['/user/connection'])

  }
}