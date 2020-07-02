
/*import { AuthService } from './auth.service';*/
import { environment } from './../../environments/environment.prod';
import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../shared/user.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  
  constructor(
    private httpService: HttpService,
    private storageServices: StorageService,
    private router: Router,
    public afAuth: AngularFireAuth,
  ) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }

  async login(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(
        user.email,
        user.password);
    } catch (error) {
      console.log('Error on login', error);
    }
  }

  async signup(user: User) {
    debugger;
    try {
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
     } catch (error) {

    }
  }

  /*login(postData: any): Observable<any> {

    return this.httpService.post('login', postData);
  }

  signup(postData: any): Observable<any>{
    return this.httpService.post('signup',postData);
  }*/

  logout() {
    this.storageServices.removeItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['']);
    })

  }
}
