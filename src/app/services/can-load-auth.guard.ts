import { Router } from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements  CanLoad {
  constructor(private auth:AuthStore,private router:Router){}
 
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean>  {
    return this.auth.isLoggedIn$
    .pipe(
      first(),
      tap(loggedIn=>{
        if(!loggedIn){
          this.router.navigateByUrl('/login');
        }
      })
      );
  }
}
