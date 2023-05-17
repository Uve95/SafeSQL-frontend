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
 
  users: User[];

  constructor(private userService: UserService, private router:Router ) { }
 
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.findAllUsers().subscribe(dato =>{
      this.users=dato;
    })
  }

  updateUser(email:string){
    this.router.navigate(['update-user',email]);
  }
  
  deleteUser(email:string){
    this.userService.deleteUser(email).subscribe(dato =>{
      console.log(dato);
      this.getAllUser();
    })
  }
 
}
