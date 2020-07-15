import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-edit-service',
  templateUrl: './modal-edit-service.component.html',
  styleUrls: ['./modal-edit-service.component.scss'],
})
export class ModalEditServiceComponent {

  public documentid: any;
  public editServiceForm: FormGroup;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.editServiceForm = this.formBuilder.group({
      userUid: ['', Validators.required],
      id: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });


    let editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe((service) => {
      this.editServiceForm.setValue({
        id: this.documentid,
        userUid: service.payload.data()['userUid'],
        nombreServicio: service.payload.data()['nombreServicio'],
        idProfesional: service.payload.data()['idProfesional'],
        descripcionServicio: service.payload.data()['descripcionServicio']
      });
      editSubscribe.unsubscribe();
    });
  }

  public editService(form, documentId = this.documentid) {
    let data = {
      id: form.id,
      userUid: form.userUid,
      nombreServicio: form.nombreServicio,
      idProfesional: form.idProfesional,
      descripcionServicio: form.descripcionServicio
    }
    this.firebaseServiceService.updateService(documentId, data).then(() => {
      this.editServiceForm.setValue({
        id: '',
        userUid: '',
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: ''
      });

      console.log('Documento editado exitósamente');

      this.dismissModal();

    }, (error) => {
      console.log(error);
    });
  }

  dismissModal() {
    this.ModalController.dismiss();
  }
}

