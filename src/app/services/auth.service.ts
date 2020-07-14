
import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user'
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private angularFirestore: AngularFirestore,
    private storageServices: StorageService,
    private router: Router,
    public angularFireAuth: AngularFireAuth,
  ) { }

  public dataUser: UserInterface;

async login(UserInterface) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(
        UserInterface.email,
        UserInterface.password);
    } catch (error) {
      console.log('Error on login', error);
    }
  } 

  async signup(user) {
      return await this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password).then((credential) => {
        this.updateUserData(credential, user.roles);
        this.router.navigateByUrl('/home')
      });
  }

  async logout() {
    await this.angularFireAuth.signOut();
    await this.storageServices.removeItem(AuthConstants.AUTH);
    this.router.navigate(['/']);
  }

  private updateUserData(user, roleData) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.user.uid}`);

    this.dataUser = {
      id: user.user.uid,
      email: user.user.email,
      roles: roleData
    }
    return userRef.set(this.dataUser, { merge: true })
  }

  isAuth() {
    return this.angularFireAuth.authState.pipe(map(auth => auth))
  }

  isUserAdmin(userUid) {
    return this.angularFirestore.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
}
