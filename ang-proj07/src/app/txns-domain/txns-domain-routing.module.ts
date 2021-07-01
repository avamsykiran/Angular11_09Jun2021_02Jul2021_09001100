import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnualStatementComponent } from './annual-statement/annual-statement.component';

import { TxnsDomainComponent } from './txns-domain.component';
import { TxnsFormComponent } from './txns-form/txns-form.component';
import { TxnsListComponent } from './txns-list/txns-list.component';

const routes: Routes = [
  {
    path: '', component: TxnsDomainComponent, children: [
      { path: 'list', component: TxnsListComponent },
      { path: 'listAnnual', component: AnnualStatementComponent },
      { path: 'new', component: TxnsFormComponent },
      { path: 'edit/:id', component: TxnsFormComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TxnsDomainRoutingModule { }
