import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DetailsUserComponent } from "src/app/pages/details-user/details-user.component";
import { UpdateUserComponent } from "src/app/pages/update-user/update-user.component";
import { UserListComponent } from "src/app/pages/user-list/user-list.component";
import { ChangePasswordComponent } from "src/app/pages/change-password/change-password.component";
import { ForgotPasswordComponent } from "src/app/pages/forgot-password/forgot-password.component";
import { RegisterUserComponent } from "src/app/pages/register-user/register-user.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "src/app/pages/login/login.component";
import { authInterceptorProviders } from "src/app/services/user/auth.interceptor";
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { NavbarComponent } from './pages/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    RegisterUserComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    DetailsUserComponent,
    UpdateUserComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    NavbarComponent
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule
  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
