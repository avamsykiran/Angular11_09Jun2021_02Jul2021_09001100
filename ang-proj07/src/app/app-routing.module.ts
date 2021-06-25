import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './shared/login.guard';
import { TxnsGuard } from './shared/txns.guard';
import { UsersGuard } from './shared/users.guard';

const routes: Routes = [
  {
    path: 'users', canActivate: [UsersGuard], canActivateChild: [UsersGuard], canLoad: [UsersGuard],
    loadChildren: () => import('./users-domain/users-domain.module').then(m => m.UsersDomainModule)
  },
  {
    path: 'txns', canActivate: [TxnsGuard], canActivateChild: [TxnsGuard], canLoad: [TxnsGuard],
    loadChildren: () => import('./txns-domain/txns-domain.module').then(m => m.TxnsDomainModule)
  },
  {
    path: 'login', canActivate: [LoginGuard], canActivateChild: [LoginGuard], canLoad: [LoginGuard],
    loadChildren: () => import('./login-domain/login-domain.module').then(m => m.LoginDomainModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
