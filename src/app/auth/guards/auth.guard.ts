import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard {

  constructor(
    private authService:AuthService,
    private router:Router,
  ) {}

private   checkAuthStatus(): boolean|Observable<boolean>{
return this.authService.checkAuthentication().pipe(
  tap( isAuthenticated=>{
      if(!isAuthenticated){
        this.router.navigate(['./auth/login'])
      }
  })
)
}

  public canMatch: CanMatchFn = (route:Route, segments:UrlSegment[]): boolean|Observable<boolean> => {

   return this.checkAuthStatus();

  }

  public canActivate: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | Observable<boolean> => {

    console.log('canActivate', { route, state });

    return this.checkAuthStatus();

  };

}
