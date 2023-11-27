import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from 'src/app/services/user/user';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService, private router: Router) { }

  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.list().subscribe((dato: User[]) => {
      this.users = dato;
    }),
      (err: any) => {
      }
    setTimeout(this.loadUsers, 1000);

  }

  delete(email: string): void {
    console.log('Entrando en delete');
    if (confirm('¿Estás seguro?')) {
      this.userService.delete(email).subscribe(() => {
        console.log('Eliminación exitosa');
        this.loadUsers();
        window.location.reload();
      });
    }
  }
  
  public back() {

    this.router.navigate(['/admin/dashboard']);

  }

}