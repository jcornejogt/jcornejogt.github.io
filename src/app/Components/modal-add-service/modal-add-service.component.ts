import { Component, OnInit, Input } from '@angular/core';
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

  @Input() userUid: string;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder) { }

  

  ngOnInit() { 

    this.serviceForm = this.formBuilder.group({
      userUid: [this.userUid, Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
  });
} 

  public addService(form, documentId = this.documentId) {
    let data = {
      userUid: form.userUid,
      nombreServicio: form.nombreServicio,
      idProfesional: form.idProfesional,
      descripcionServicio: form.descripcionServicio
    }

    this.firebaseServiceService.createService(data).then(() => {
      this.serviceForm.setValue({
        userUid: '',
        nombreServicio: '',
        idProfesional: '',
        descripcionServicio: ''
      });
      console.log('Documento creado exitósamente!');
    });

    this.dismissModal();
  }


  dismissModal() {
    this.ModalController.dismiss();
  }

}
