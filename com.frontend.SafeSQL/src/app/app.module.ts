import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DetailsUserComponent } from "src/assets/admin/details-user/details-user.component";
import { UpdateUserComponent } from "src/assets/admin/update-user/update-user.component";
import { UserListComponent } from "src/assets/admin/user-list/user-list.component";
import { ChangePasswordComponent } from "src/assets/user/change-password/change-password.component";
import { ForgotPasswordComponent } from "src/assets/user/forgot-password/forgot-password.component";
import { RegisterUserComponent } from "src/assets/user/register-user/register-user.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "src/model/login/login.component";
import { authInterceptorProviders } from "src/model/user/auth.interceptor";




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
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
