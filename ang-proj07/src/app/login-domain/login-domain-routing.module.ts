import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDomainComponent } from './login-domain.component';

const routes: Routes = [{ path: '', component: LoginDomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginDomainRoutingModule { }
