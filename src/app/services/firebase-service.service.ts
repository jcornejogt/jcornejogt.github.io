import { ProfessionInterface, PersonInterface } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseServiceService {

  constructor
    (
      public firestore: AngularFirestore,
  ) { }

  public createService(data: { nombreServicio: string, idProfesional: string, descripcionServicio: string }) {
    return this.firestore.collection('servicios').add(data);
  }

  public getServices() {
    return this.firestore.collection('servicios').snapshotChanges();
  }

  public getService(documentId: string) {
    return this.
      firestore.collection('servicios').doc(documentId).snapshotChanges();
  }

  public deleteService(documentId: string) {
    return this.firestore.collection('servicios').doc(documentId).delete();
  }

  public updateService(documentId: string, data: any) {
    return this.firestore.collection('servicios').doc(documentId).set(data);
  }

  public createPerson(Person: PersonInterface, User) {

    debugger;
    let personData = null;



    if (Person.professions != null) {
      personData = {
        firstName: Person.firstName,
        lastName: Person.lastName,
        userUid: User.user.uid,
        professions: Person.professions
      }
    } else {
      personData = {
        firstName: Person.firstName,
        lastName: Person.lastName,
        userUid: User.user.uid
      }
    }

    return this.firestore.collection('persons').add(personData);
  }

  public updatePerson(documentId: string, data: any) {
    return this.firestore.collection('persons').doc(documentId).set(data);
  }

  public getProfessions() {
    return this.firestore.collection('professions').snapshotChanges();
  }

}