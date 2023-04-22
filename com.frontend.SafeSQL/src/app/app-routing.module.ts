import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from 'src/model/user-list/user-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
{ 
  path: 'login', 
  component: UserListComponent
},
{
  path: '', 
  component: HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { };
