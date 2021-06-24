import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDomainRoutingModule } from './login-domain-routing.module';
import { LoginDomainComponent } from './login-domain.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginDomainComponent],
  imports: [
    CommonModule,
    LoginDomainRoutingModule,
    FormsModule
  ]
})
export class LoginDomainModule { }
