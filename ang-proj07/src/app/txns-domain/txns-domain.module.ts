import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { TxnsDomainRoutingModule } from './txns-domain-routing.module';
import { TxnsDomainComponent } from './txns-domain.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { TxnsListComponent } from './txns-list/txns-list.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';
import { AnnualStatementComponent } from './annual-statement/annual-statement.component';


@NgModule({
  declarations: [TxnsDomainComponent, TxnsListComponent, TxnsFormComponent, AnnualStatementComponent],
  imports: [
    CommonModule,
    TxnsDomainRoutingModule,
    WidgetsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TxnsDomainModule { }
