import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDomainComponent } from './users-domain.component';

const routes: Routes = [{ path: '', component: UsersDomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDomainRoutingModule { }
