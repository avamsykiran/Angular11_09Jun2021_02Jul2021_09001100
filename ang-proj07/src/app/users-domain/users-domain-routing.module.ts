import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersListComponent } from './users-list/users-list.component';

import { UsersDomainComponent } from './users-domain.component';

const routes: Routes = [
  {
    path: '', component: UsersDomainComponent, children: [
      { path: 'list', component: UsersListComponent },
      { path: 'new', component: UserFormComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDomainRoutingModule { }
