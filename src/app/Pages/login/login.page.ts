import { ToastController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public LoginForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router,
    public formBuilder: FormBuilder, public toastController: ToastController) {
    this.LoginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  async login(form) {    
    let data = {
      email: form.email,
      password: form.password
    }
    const user = await this.authSvc.login(data);
    if (user != 1) {
      console.log('Logueado exitosamente!');
      this.router.navigateByUrl('/home')
    } else {
     
        this.openToast("Email Inválido");          
    }
  } 

  async openToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      animated: true,
      color: 'danger',
    });
    await (toast.present());
  }
}
