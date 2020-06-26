import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'type-of-login',
    loadChildren: () => import('./Pages/typeoflogin/type-of-login.module').then( m => m.TypeOfLoginPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./pages/add-service/add-service.module').then( m => m.AddServicePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
