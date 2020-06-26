import { ModalEditServiceComponent } from './../../Components/modal-edit-service/modal-edit-service.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  
  nicaService: any = [{ titulo: 'Titulo del Servicio' , descripcion: 'Descripcion del servicio', NombreProfesional : 'Nombre del Profesional'}];
  
  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  getServices($event) {
    const value = $event.target.value;
    console.log("La busqueda es:" + value);
  }

  async editService(item) {
   const modal = await this.modalController.create({
      component: ModalEditServiceComponent,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });

    await modal.present();
  }

  addService() {
    this.router.navigate(['add-service']);
  }


}
