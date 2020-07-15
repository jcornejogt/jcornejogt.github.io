import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-view-service',
  templateUrl: './modal-view-service.component.html',
  styleUrls: ['./modal-view-service.component.scss'],
})
export class ModalViewServiceComponent implements OnInit {

  public documentid: any;
  public viewServiceForm: FormGroup;

  constructor(
    private ModalController: ModalController,
    private firebaseServiceService: FirebaseServiceService,
    public router: Router,
    public formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.viewServiceForm = this.formBuilder.group({
      userUid: ['', Validators.required],
      id: ['', Validators.required],
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });

    let editSubscribe = this.firebaseServiceService.getService(this.documentid).subscribe((service) => {
      this.viewServiceForm.setValue({
        id: this.documentid,
        userUid: service.payload.data()['userUid'],
        nombreServicio: service.payload.data()['nombreServicio'],
        idProfesional: service.payload.data()['idProfesional'],
        descripcionServicio: service.payload.data()['descripcionServicio']
      });
      editSubscribe.unsubscribe();
    });

  }

  dismissModal() {
    this.ModalController.dismiss();
  }

}
