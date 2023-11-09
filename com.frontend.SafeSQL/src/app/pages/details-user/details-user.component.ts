import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  user: any = null;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const token = this.activatedRoute.snapshot.params['token'];
    this.userService.details(token).subscribe(data => {
      this.user = data;
      this.user.email = data.email;
      this.user.name = data.name;
      this.user.surname = data.surname;
      
    },
      err => {
        this.router.navigate(['']);
      }
    );
  }

  back(): void {
    window.history.back();
  }

}
