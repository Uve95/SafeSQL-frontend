import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from 'src/model/user-list/user-list.component';
import { RegisterUserComponent } from '../model/register-user/register-user.component';
import { LoginComponent } from '../model/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [  
{ 
  path: 'user/list', 
  component: UserListComponent
},
{
  path: '', 
  component: LoginComponent
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
,
{
  path: 'user/changePassword/:email', 
  component: ChangePasswordComponent
}
,
{
  path: 'user/details/:email', 
  component: DetailsUserComponent
},
{
  path: 'user/update/:email', 
  component: UpdateUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
