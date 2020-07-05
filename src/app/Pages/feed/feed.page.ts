import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { ModalEditServiceComponent } from './../../Components/modal-edit-service/modal-edit-service.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  
  public services = [];

  constructor(
    private router: Router,
    private firebaseServiceService: FirebaseServiceService,
    private modalController: ModalController,
    private authSvc: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {

    this.firebaseServiceService.getServices().subscribe((service) => {
      this.services = [];
      service.forEach((service: any) => {
        this.services.push({
          id: service.payload.doc.id,
          data: service.payload.doc.data()
        });
        console.log("info de coleccion: "+ this.services.toString());
      })
    });

  }

  searchServices($event) {
    const value = $event.target.value;
    console.log("La busqueda es:" + value);
  }

  async editService(docId: any) {
    const modal = await this.modalController.create({
      component: ModalEditServiceComponent,
      componentProps: {
        documentid: docId
      }
    });

    await modal.present();
  }

  addService() {
    this.router.navigateByUrl('/home/add-service');
  }

  logOut(){
console.log('Hasta pronto!');
this.afAuth.signOut();
this.router.navigateByUrl('/login')
  }

}
