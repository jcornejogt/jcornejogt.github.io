import { PersonInterface, ProfessionInterface } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/user';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ToastController } from '@ionic/angular';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-signup-professional',
  templateUrl: './signup-professional.page.html',
  styleUrls: ['./signup-professional.page.scss'],
})

export class SignupProfessionalPage implements OnInit {

  selected: [];
  professionsf = [];

  //declaramos el formulario de registro
  public SignupProForm: FormGroup;
  public dataUser: UserInterface;
  public personData: PersonInterface;
  public profession: ProfessionInterface;
  public professionsSelected: ProfessionInterface[];


  constructor(
    private firebaseService: FirebaseServiceService,
    private authSvc: AuthService,
    private router: Router,
    public formBuilder: FormBuilder,
    public toastController: ToastController) {
      
    //construimos el formulario
    this.SignupProForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      userLastname: ['', Validators.required],
      userProfession: [Selection, Validators.required]
    });

  }

  ngOnInit() { }

  get() {
    this.professionsf = [];

    this.firebaseService.getProfessions().subscribe((profession) => {
      profession.forEach((res: any) => {

        let prof = {
          id: res.payload.doc.data()["id"],
          professionName: res.payload.doc.data()['professionName'],
          professionSysName: res.payload.doc.data()['professionSysName']
        }
        this.professionsf.push({
          id: res.payload.doc.data()["id"],
          professionName: res.payload.doc.data()['professionName'],
          professionSysName: res.payload.doc.data()['professionSysName']
        });
      })
    });
  }

  signup(form) {
debugger;
    this.personData = {
      firstName: form.userName,
      lastName: form.userLastname,
      professions: this.professionsSelected
    }
  
    this.dataUser = {
      email: form.email,
      password: form.password,
      roles: {
        professional: true
      }
    }

    try {
      this.authSvc.signup(this.dataUser, this.personData);
      console.log('Creado exitosamente!');
      this.openToast("Bienvenido");
      this.router.navigate(['/home/feed']);
    } catch (error) {
      console.log('Error de registro: '+ error);
      this.openToast(error.message);
    }
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
   this.professionsSelected = event.value
  }

  async openToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      animated: true,
    });
    await (toast.present());
  }

  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }
  
}