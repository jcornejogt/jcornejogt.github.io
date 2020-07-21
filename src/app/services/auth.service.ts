import { element } from 'protractor';
import { PersonInterface, ProfessionInterface } from './../models/user';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { User } from './../shared/user.class';

import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../models/user'
import { map } from "rxjs/operators"
import { IonicSelectableComponent } from 'ionic-selectable';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private angularFirestore: AngularFirestore,
    private storageServices: StorageService,
    private router: Router,
    public angularFireAuth: AngularFireAuth,
    public fbs: FirebaseServiceService
  ) { }

  public dataUser: UserInterface;
  public personData: PersonInterface;

  async login(UserInterface) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(
        UserInterface.email,
        UserInterface.password);
    } catch (error) {
      console.log('Error on login', error);
      if (error.code = "auth/invalid-email") {
        return 1;
      }
    }
  }

  async signup(user, personData: PersonInterface) {

    await this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password).then((credential) => {
      this.updateUserData(credential, user.roles);
      this.fbs.createPerson(personData, credential);
      this.router.navigateByUrl('/home/feed');
    });
  }


  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log(event.value)
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
