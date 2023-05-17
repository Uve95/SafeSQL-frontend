import { Component } from '@angular/core';
import { User } from 'src/model/user/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  users: User[];


}
