import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomePage } from './home.page';
import { auth } from 'firebase';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../Pages/feed/feed.module').then(m => m.FeedPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'notifications',
        loadChildren: () => import('../Pages/notifications/notifications.module').then(m => m.NotificationsPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'messages',
        loadChildren: () => import('../Pages/messages/messages.module').then(m => m.MessagesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('../Pages/settings/settings.module').then(m => m.SettingsPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'add-service',
        loadChildren: () => import('../Pages/add-service/add-service.module').then( m => m.AddServicePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
