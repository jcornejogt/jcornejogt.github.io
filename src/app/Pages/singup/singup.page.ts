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
      password: form.password,
      roles: {
        professional: true
      }
    }
    try{
      const user = await this.authSvc.signup(data);
      console.log('Creado exitosamente!');
      this.router.navigate(['/login']);
    }catch (error){
      console.log('Error de registro'+error);
    }
  }

  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }
}
