import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnsDomainRoutingModule } from './txns-domain-routing.module';
import { TxnsDomainComponent } from './txns-domain.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [TxnsDomainComponent],
  imports: [
    CommonModule,
    TxnsDomainRoutingModule,
    WidgetsModule
  ]
})
export class TxnsDomainModule { }
