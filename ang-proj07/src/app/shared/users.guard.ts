import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate, CanActivateChild, CanLoad {
 
  constructor(private usersSerivce:UsersService,private router:Router){}

  isAllowed():boolean{
    let u = this.usersSerivce.getCurretnUser();
    let allowed=this.usersSerivce.isLoggedIn() && u?.role==='ADMIN';

    if(!allowed){
      if(!this.usersSerivce.isLoggedIn()){
        this.router.navigateByUrl("/")
      }else{
        this.router.navigateByUrl("/txns")
      }
    }
    
    return allowed;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAllowed();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed();
  }
}
