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
  public isAdmin: any = null;
  public userUid: string = null;

  constructor(
    private router: Router,
    private firebaseServiceService: FirebaseServiceService,
    private modalController: ModalController,
    private authSvc: AuthService,
    private afAuth: AngularFireAuth
  ) { }



  ngOnInit() {
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
          this.isAdmin = this.isAdmin.hasOwnProperty('admin');
        }
        )
      }
    })
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

  logOut() {
    console.log('Hasta pronto!');
    this.afAuth.signOut();
    this.router.navigateByUrl('/login')
  }
}
