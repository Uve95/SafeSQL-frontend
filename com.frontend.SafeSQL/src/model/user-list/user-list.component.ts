import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from 'src/model/user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 
  users: Array<User>;

  constructor(private userService: UserService, private router:Router ) { }
 
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.userService.list().subscribe(dato =>{
      this.users=dato;
    }),
      (err: any) => {
      console.log(err);
    }
  }

  delete(email:String): void {
    if (confirm('¿Estás seguro?')) {
      this.userService.delete(email).subscribe(data => {
        this.loadUsers();
      });
    }
  }
  

 
}
