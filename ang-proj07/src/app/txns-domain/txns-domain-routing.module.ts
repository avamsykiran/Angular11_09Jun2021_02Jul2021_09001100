import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxnsDomainComponent } from './txns-domain.component';

const routes: Routes = [{ path: '', component: TxnsDomainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnsDomainRoutingModule { }
