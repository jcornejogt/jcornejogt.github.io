import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})

export class SingupPage implements OnInit {
  public SignupForm: FormGroup;

  constructor(private authSvc: AuthService, private router: Router,
    public formBuilder: FormBuilder) {
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
    }
  }

  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }

}
