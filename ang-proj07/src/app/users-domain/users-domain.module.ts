import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDomainRoutingModule } from './users-domain-routing.module';
import { UsersDomainComponent } from './users-domain.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [UsersDomainComponent],
  imports: [
    CommonModule,
    UsersDomainRoutingModule,
    WidgetsModule
  ]
})
export class UsersDomainModule { }
