import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-edit-service',
  templateUrl: './modal-edit-service.component.html',
  styleUrls: ['./modal-edit-service.component.scss'],
})
export class ModalEditServiceComponent {

  constructor(private ModalController: ModalController) { }

  updateService() {
    this.ModalController.dismiss();
  }

  dismissModal() {
    this.ModalController.dismiss();
  }
}

