import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginDomainRoutingModule } from './login-domain-routing.module';
import { LoginDomainComponent } from './login-domain.component';
import { FormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [LoginDomainComponent],
  imports: [
    CommonModule,
    LoginDomainRoutingModule,
    FormsModule,
    WidgetsModule
  ]
})
export class LoginDomainModule { }
