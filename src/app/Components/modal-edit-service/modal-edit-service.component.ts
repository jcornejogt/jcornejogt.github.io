import { ModalController } from '@ionic/angular';
import { Component, Input } from '@angular/core';
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
  public currentStatus = 1;

  constructor(
    private ModalController: ModalController, 
    private firebaseServiceService: FirebaseServiceService,
    public router: Router, 
    public formBuilder: FormBuilder) {

  this.editServiceForm = formBuilder.group({
      id: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });
  }

  ngOnInit() { 
    let editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe((service) => {
      this.currentStatus = 2;
      this.editServiceForm.setValue({
        id: this.documentid,
        nombreServicio: service.payload.data()['nombreServicio'],
        idProfesional: service.payload.data()['idProfesional'],
        descripcionServicio: service.payload.data()['descripcionServicio']
      });
      editSubscribe.unsubscribe();
    });
   }

  public editService(form, documentId = this.documentid) {
    debugger;
    let data = {
      nombreServicio: form.nombreServicio,
      idProfesional: form.idProfesional,
      descripcionServicio: form.descripcionServicio
    }
    this.firebaseServiceService.updateService(documentId, data).then(() => {
      this.currentStatus = 1;
      this.editServiceForm.setValue({
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: ''
      });
      console.log('Documento editado exitósamente');
    }, (error) => {
      console.log(error);
    });
  }

  dismissModal() {
    this.ModalController.dismiss();
  }
}

