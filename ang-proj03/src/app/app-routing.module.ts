import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'addUser',component:UserFormComponent},
  {path:'',pathMatch:'full',redirectTo:'/users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
