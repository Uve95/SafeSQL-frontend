import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from 'src/model/user-list/user-list.component';
import { RegisterUserComponent } from '../model/register-user/register-user.component';
import { UpdateUserComponent } from '../model/update-user/update-user.component';
import { LoginComponent } from '../model/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [  
{ 
  path: 'userList', 
  component: UserListComponent
},
{
  path: '', 
  component: LoginComponent
},
{
  path: 'update-user/:email', 
  component: UpdateUserComponent
},
{
  path: 'user/register', 
  component: RegisterUserComponent
},
{
  path: 'user/login', 
  component: LoginComponent
},
{
  path: 'user/forgotPassword', 
  component: ForgotPasswordComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
