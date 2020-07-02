
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/user.class';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})

export class SingupPage implements OnInit {
user: User = new User();
constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }

   async signup(){
    
    debugger;
   
     const user = await this.authSvc.signup(this.user);
     if (user){
       console.log('Successfully created user!');
       this.router.navigate(['/login'])
     }else{
       console.log('no funciona el registro');
     }
   }

  /*registrate(){
    this.router.navigate(['/login'])
  }*/
  navigateToTypeOfLogin() {
    this.router.navigate(['type-of-login']);
  }

}
