import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseServiceService {

constructor
  (
    public firestore: AngularFirestore,
  ){}

  public createService(data: {nombreServicio: string, idProfesional: string, descripcionServicio: string}) {
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

  

}