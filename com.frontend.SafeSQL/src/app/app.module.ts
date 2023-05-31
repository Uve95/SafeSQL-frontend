import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from 'src/assets/admin/user-list/user-list.component';
import { RegisterUserComponent } from '../assets/user/register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../model/login/login.component';
import { ForgotPasswordComponent } from '../assets/user/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '../assets/user/change-password/change-password.component';
import { DetailsUserComponent } from '../assets/admin/details-user/details-user.component';
import { UpdateUserComponent } from '../assets/admin/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RegisterUserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    DetailsUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
