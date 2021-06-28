import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersDomainRoutingModule } from './users-domain-routing.module';
import { UsersDomainComponent } from './users-domain.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [UsersDomainComponent, UsersListComponent, UserFormComponent],
  imports: [
    CommonModule,
    UsersDomainRoutingModule,
    WidgetsModule,
    ReactiveFormsModule
  ]
})
export class UsersDomainModule { }
