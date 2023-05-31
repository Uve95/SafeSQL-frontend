import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/user/user';
import { UserService } from 'src/model/user/user.service';

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
    const email = this.activatedRoute.snapshot.params['email'];
    this.userService.details(email).subscribe(data => {
      this.user = data;
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
