import { User } from './../../shared/user.class';
import { AuthConstants } from './../../config/auth-constants';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public User = {
    email: '',
    password: ''

  };
   
  constructor(
    private router: Router,
    private authService: AuthService,
    private StorageService: StorageService
  ) { }

  ngOnInit() { }

  validateInputs() {
    let email = this.User.email.trim();
    let password = this.User.password.trim();

    return (this.User.email &&
      this.User.password &&
      email.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
   
    if (this.validateInputs()) {
      this.router.navigate(['home']);
    /*   this.authService.login(this.User).subscribe((res: any) => {
        if (res.userData) {
          this.StorageService.store(AuthConstants.AUTH, res.userData);
          this.router.navigate(['home']);
        } else {
          console.log('Incorrect username or Password');
        }
      }, */
        /*(error: any) => {
          console.log('Network connection error');
        }*/
      /* ); */
    } else {
      console.log('Please give some information');
    } 
  }
}


