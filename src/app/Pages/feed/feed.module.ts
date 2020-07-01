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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FeedPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [FeedPage, ModalEditServiceComponent],
  entryComponents: [ModalEditServiceComponent]
})
export class FeedPageModule {}
