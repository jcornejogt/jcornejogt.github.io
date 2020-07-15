import { ModalViewServiceComponent } from './../../Components/modal-view-service/modal-view-service.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../services/auth.service';
import { ModalEditServiceComponent } from './../../Components/modal-edit-service/modal-edit-service.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { NgZone } from "@angular/core";
import { ModalAddServiceComponent } from 'src/app/Components/modal-add-service/modal-add-service.component';
import { AlertsComponent } from './../../Components/alerts/alerts.component'


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(
    private alertCntrl: AlertController,
    private router: Router,
    private firebaseServiceService: FirebaseServiceService,
    private modalController: ModalController,
    private authSvc: AuthService,
    private afAuth: AngularFireAuth,
    private ngZone: NgZone
  ) { }

  public services = [];
  public isAdmin: any = null;
  public userUid: string = null;
  
  public alrt = new AlertsComponent(this.alertCntrl);

  ngOnInit() {
    this.getServices();
    this.getCurrentUser();
  }

  getServices() {
    this.services = [];
    this.firebaseServiceService.getServices().subscribe((service) => {
      service.forEach((service: any) => {
        this.services.push({
          id: service.payload.doc.id,
          data: service.payload.doc.data()
        });
      })
    });
  }

  getCurrentUser() {
    this.authSvc.isAuth().subscribe(auth => {
      if (auth) {
        this.userUid = auth.uid;
        this.authSvc.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles);
          this.isAdmin = this.isAdmin.hasOwnProperty('professional');
        }
        )
      }
    })
  }

  searchServices($event) {
    const value = $event.target.value;
    console.log("La busqueda es:" + value);
    this.services = [];
    this.firebaseServiceService.getService(value).subscribe((service) => {
      this.services.push({
        id: service.payload.id,
        data: service.payload.data()
      });
    });

  }

  async editService(docId: any) {
    const modal = await this.modalController.create({
      component: ModalEditServiceComponent,
      componentProps: { documentid: docId }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.getServices();
    });
    modal.present();
  }

  async getViewServices(docId: any) {
    const modal = await this.modalController.create({
      component: ModalViewServiceComponent,
      componentProps: { documentid: docId }
    });  
    modal.present();
  }

  async addService() {
    const modal = await this.modalController.create({
      component: ModalAddServiceComponent,
      componentProps: { userUid: this.userUid }
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.getServices();
    });
    modal.present();
  }


  public async removeService(docId: any) {

let header = 'Suave chatel!'
let message = 'Seguro querés borrar este servicio prix?'

    const confirm = await this.alrt.presentAlertConfirm(header, message);
    if (confirm) {
      await this.firebaseServiceService.deleteService(docId).then(() => {
        this.getServices();
        console.log('Deleted');
      })
    } else {
      console.log('Canceled');
    }
  };




  logOut() {
    console.log('Hasta pronto!');
    this.authSvc.logout();
  }
}
