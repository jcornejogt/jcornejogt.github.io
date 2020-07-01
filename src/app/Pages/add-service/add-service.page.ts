import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  public serviceForm: FormGroup;
  public documentId = null;
  public currentStatus = 1;

  constructor(private firebaseServiceService: FirebaseServiceService,
    public router: Router, public formBuilder: FormBuilder) {

    this.serviceForm = formBuilder.group({
      nombreServicio: ['', Validators.required],
      descripcionServicio: ['', Validators.required],
      idProfesional: ['', Validators.required]
    });

  }

  ngOnInit() {
  }


  public addService(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
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
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nombreServicio: form.nombreServicio,
        idProfesional: form.idProfesional,
        descripcionServicio: form.descripcionServicio
      }
      this.firebaseServiceService.updateService(documentId, data).then(() => {
        this.currentStatus = 1;
        this.serviceForm.setValue({
          nombreServicio: '',
          uridProfesionall: '',
          descripcionServicio: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

}
