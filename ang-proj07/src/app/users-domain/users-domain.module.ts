import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDomainRoutingModule } from './users-domain-routing.module';
import { UsersDomainComponent } from './users-domain.component';


@NgModule({
  declarations: [UsersDomainComponent],
  imports: [
    CommonModule,
    UsersDomainRoutingModule
  ]
})
export class UsersDomainModule { }
