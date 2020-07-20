import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserInterface } from 'src/app/models/user';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})

export class SingupPage implements OnInit {
  public SignupForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router,
    public formBuilder: FormBuilder, public toastController: ToastController) {
    this.SignupForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      userLastname: ['', Validators.required],
    });
  }

  ngOnInit() { }

  async signup(form) {

    let data = {
      email: form.email,
      password: form.password,
      roles: {
        client: true
      }
    }

    let personData = {
    firstName: form.userName,
    lastName: form.userLastname,
    }

    try {
      await this.authSvc.signup(data, personData);
      console.log('Creado exitosamente!');
      this.openToast("Bienvenido");
    }
    catch (error) {
      console.log('Error de registro' + error);
      this.openToast(error.message);
    }
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