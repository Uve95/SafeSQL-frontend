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
import { UserChecklistComponent } from './pages/user-checklist/user-checklist.component';
import { UpdateAdminComponent } from './pages/update-admin/update-admin.component';
import { ReportComponent } from './pages/report/report.component';
import { UserConnectionComponent } from './pages/user-connection/user-connection.component';


const routes: Routes = [


  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,

  }
  ,

  {
    path: 'user/connection',
    component: UserConnectionComponent,
    //canActivate: [UserGuard]

  },

  {
    path: 'user/report',
    component: ReportComponent,
    canActivate: [UserGuard]


  }
  ,
  {
    path: 'user/checklist',
    component: UserChecklistComponent,
    //canActivate: [UserGuard]

  },
  {
    path: 'admin/admin',
    component: UserListComponent,
    canActivate: [AdminGuard]

  },
  {
    path: 'admin/list',
    component: UserListComponent,
    canActivate: [AdminGuard]
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
    path: 'user/changePassword',
    component: ChangePasswordComponent,

  }
  ,
  {
    path: 'user/update/:token',
    component: UpdateUserComponent,
    canActivate: [UserGuard]


  }
  ,
  {
    path: 'admin/update/:token',
    component: UpdateAdminComponent,
    canActivate: [AdminGuard]

  }
  ,
  {
    path: 'admin/details/:token',
    component: DetailsUserComponent,
    canActivate: [AdminGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
