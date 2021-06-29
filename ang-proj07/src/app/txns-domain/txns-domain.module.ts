import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TxnsDomainRoutingModule } from './txns-domain-routing.module';
import { TxnsDomainComponent } from './txns-domain.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { TxnsListComponent } from './txns-list/txns-list.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';


@NgModule({
  declarations: [TxnsDomainComponent, TxnsListComponent, TxnsFormComponent],
  imports: [
    CommonModule,
    TxnsDomainRoutingModule,
    WidgetsModule,
    ReactiveFormsModule
  ]
})
export class TxnsDomainModule { }
