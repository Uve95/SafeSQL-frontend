import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsUserComponent } from 'src/app/pages/details-user/details-user.component';
import { UpdateUserComponent } from 'src/app/pages/update-user/update-user.component';
import { UserListComponent } from 'src/app/pages/user-list/user-list.component';
import { ChangePasswordComponent } from 'src/app/pages/change-password/change-password.component';
import { ForgotPasswordComponent } from 'src/app/pages/forgot-password/forgot-password.component';
import { RegisterUserComponent } from 'src/app/pages/register-user/register-user.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AdminGuard } from 'src/app/services/user/admin.guard';
import { UserGuard } from 'src/app/services/user/user.guard';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/home',
    component: UserDashboardComponent,
    canActivate:[UserGuard]

  },
  {
    path: 'admin/admin',
    component: UserListComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'admin/list',
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

  }
  ,
  {
    path: 'user/changePassword/:email',
    component: ChangePasswordComponent,
    canActivate:[UserGuard]

  }
  ,
  {
    path: 'user/update/:email',
    component: UpdateUserComponent,
    canActivate:[UserGuard]

  }
  ,
  {
    path: 'admin/details/:email',
    component: DetailsUserComponent,
    canActivate:[AdminGuard]

  },
  {
    path: 'admin/update/:email',
    component: UpdateUserComponent,
    canActivate:[AdminGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
