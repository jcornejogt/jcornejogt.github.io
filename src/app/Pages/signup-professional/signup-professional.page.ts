import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/user';

@Component({
  selector: 'app-signup-professional',
  templateUrl: './signup-professional.page.html',
  styleUrls: ['./signup-professional.page.scss'],
})

export class SignupProfessionalPage implements OnInit {

  //declaramos el formulario de registro
  public SignupProForm: FormGroup;
  public dataUser: UserInterface;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    public formBuilder: FormBuilder) {
    //construimos el formulario
    this.SignupProForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  async signup(form) {
    this.dataUser = {
      email: form.email,
      password: form.password,
      roles: {
        professional: true
      }
    }
    try {
      this.authSvc.signup(this.dataUser);
      console.log('Creado exitosamente!');
      this.router.navigate(['/home']);
    } catch (error) {
      console.log('Error de registro');
    }
  }
  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }
}