import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { map } from "rxjs/operators"
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSrvc: AuthService, private router: Router, public afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return this.afAuth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        console.log('Acceso denegado!');
        this.router.navigateByUrl('/login')
        return false;
      } else {
        return true;
      }
    }))
  }
}
