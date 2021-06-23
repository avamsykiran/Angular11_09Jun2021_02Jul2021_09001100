import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TxnsDomainRoutingModule } from './txns-domain-routing.module';
import { TxnsDomainComponent } from './txns-domain.component';


@NgModule({
  declarations: [TxnsDomainComponent],
  imports: [
    CommonModule,
    TxnsDomainRoutingModule
  ]
})
export class TxnsDomainModule { }
