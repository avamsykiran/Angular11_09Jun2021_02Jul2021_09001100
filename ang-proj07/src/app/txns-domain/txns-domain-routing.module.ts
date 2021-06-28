import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TxnsDomainComponent } from './txns-domain.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';
import { TxnsListComponent } from './txns-list/txns-list.component';

const routes: Routes = [
  {
    path: '', component: TxnsDomainComponent, children: [
      { path: 'list', component: TxnsListComponent },
      { path: 'new', component: TxnsFormComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnsDomainRoutingModule { }
