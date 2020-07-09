import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { isNullOrUndefined } from 'util';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {

  constructor(private authSrvc: AuthService,
    private router: Router, public afAuth: AngularFireAuth) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.afAuth.authState.pipe(map(auth => {
      if (isNullOrUndefined(auth)) {
        return true;
      } else {
        console.log('Usted ya esta loguiado!');
        this.router.navigateByUrl('/home')
        return false;
      }
    }))
  }
}
