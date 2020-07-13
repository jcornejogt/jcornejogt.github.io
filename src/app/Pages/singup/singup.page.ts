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
      password: form.password
    }
    const user = await this.authSvc.signup(data);
    if (user) {
      console.log('Creado exitosamente!');
      this.router.navigate(['/login'])
    } else {
      console.log('Error de registro');
      this.openToast();
    }
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrecta',
      duration: 2000,
      animated: true,
    });
    await( toast.present());
  }

  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }

}
