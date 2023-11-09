import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-scripts',
  templateUrl: './admin-scripts.component.html',
  styleUrls: ['./admin-scripts.component.css']
})
export class AdminScriptsComponent  {

  textsScript1:string="SELECT CASE WHEN SERVERPROPERTY('IsIntegratedSecurityOnly') = 1 THEN '0' ELSE '1' END AS 'Authentication Mode';";

  constructor(private router: Router) { }

  public back() {

    this.router.navigate(['/admin/dashboard']);

  }

  script1(){
    alert('Texto guardado: ' + this.textsScript1);

  }
}
