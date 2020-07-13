import { User } from './../../shared/user.class';
import { auth } from 'firebase';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

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
      password: ['', Validators.required]
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

    try {
      this.authSvc.signup(data);
      console.log('Creado exitosamente!');
      this.router.navigateByUrl('/home');
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