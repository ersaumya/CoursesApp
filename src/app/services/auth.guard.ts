import { Router } from '@angular/router';
import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthStore,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>  {
    return this.auth.isLoggedIn$
    .pipe(
      map(loggedIn=>
        loggedIn?true:this.router.parseUrl('/login'))
      );
  }
  
}
