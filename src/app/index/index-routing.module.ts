import { AuthGuard } from 'src/app/guards/auth.guard';
import { NologinGuard } from 'src/app/guards/nologin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../Pages/welcome/welcome.module').then(m => m.WelcomePageModule),
        canActivate: [NologinGuard]
      },
      {
        path: 'login',
        loadChildren: () => import('../Pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [NologinGuard]
      },
      {
        path: 'signup',
        loadChildren: () => import('../Pages/singup/singup.module').then(m => m.SingupPageModule)
      }
      ,
      {
        path: 'typeoflogin',
        loadChildren: () => import('../Pages/typeoflogin/type-of-login.module').then(m => m.TypeOfLoginPageModule),
        canActivate: [NologinGuard]
      } ,
      {
        path: 'signuppro',
        loadChildren: () => import('../Pages/signup-professional/signup-professional.module').then(m => m.SignupProfessionalPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule { }
