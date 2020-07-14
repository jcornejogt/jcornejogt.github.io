import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-add-service',
  templateUrl: './modal-add-service.component.html',
  styleUrls: ['./modal-add-service.component.scss'],
})
export class ModalAddServiceComponent {

  public serviceForm: FormGroup;
  public documentId = null;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.serviceForm = formBuilder.group({
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });
  }

  ngOnInit() { }


  public addService(form, documentId = this.documentId) {
      let data = {
      nombreServicio: form.nombreServicio,
      idProfesional: form.idProfesional,
      descripcionServicio: form.descripcionServicio
    }

    this.firebaseServiceService.createService(data).then(() => {
      console.log('Documento creado exitósamente!');
      this.serviceForm.setValue({
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: ''
      });
    });

    this.dismissModal();
  }

  
  dismissModal() {
    this.ModalController.dismiss();
  }

}
