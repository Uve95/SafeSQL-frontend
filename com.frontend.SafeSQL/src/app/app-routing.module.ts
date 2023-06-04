import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from 'src/assets/admin/details-user/details-user.component';
import { UpdateUserComponent } from 'src/assets/admin/update-user/update-user.component';
import { UserListComponent } from 'src/assets/admin/user-list/user-list.component';
import { ChangePasswordComponent } from 'src/assets/user/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/assets/user/forgot-password/forgot-password.component';
import { RegisterUserComponent } from 'src/assets/user/register-user/register-user.component';
import { LoginComponent } from 'src/model/login/login.component';
import { AdminGuard } from 'src/model/user/admin.guard';
import { UserGuard } from 'src/model/user/user.guard';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'user/list',
    component: UserListComponent,
    canActivate:[AdminGuard]
  },

  {
    path: 'user/register',
    component: RegisterUserComponent
  },

  {
    path: 'user/forgotPassword',
    component: ForgotPasswordComponent,
    canActivate:[UserGuard]

  }
  ,
  {
    path: 'user/changePassword/:email',
    component: ChangePasswordComponent,
    canActivate:[UserGuard]

  }
  ,
  {
    path: 'user/details/:email',
    component: DetailsUserComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'user/update/:email',
    component: UpdateUserComponent,
    canActivate:[AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
