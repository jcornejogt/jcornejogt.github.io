import { ComponentsModule } from './../../Components/components.module';
import { AlertsComponent } from './../../Components/alerts/alerts.component';
import { ModalAddServiceComponent } from 'src/app/Components/modal-add-service/modal-add-service.component';
import { ModalEditServiceComponent } from './../../Components/modal-edit-service/modal-edit-service.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { IonicModule } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FeedPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [FeedPage, ModalEditServiceComponent, ModalAddServiceComponent, AlertsComponent],
  entryComponents: [ModalEditServiceComponent, ModalAddServiceComponent, AlertsComponent]
})
export class FeedPageModule {}
