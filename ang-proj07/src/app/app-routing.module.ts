import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users-domain/users-domain.module').then(m => m.UsersDomainModule) },
  { path: 'txns', loadChildren: () => import('./txns-domain/txns-domain.module').then(m => m.TxnsDomainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
