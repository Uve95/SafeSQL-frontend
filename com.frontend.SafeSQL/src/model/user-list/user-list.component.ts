import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from 'src/model/user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
 
  users: User[];

  constructor(private userService: UserService ) { }
 
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser(){
    this.userService.findAllUsers().subscribe(dato =>{
      this.users=dato;
    })
  }
 
}
