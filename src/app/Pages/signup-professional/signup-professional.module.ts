import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupProfessionalPageRoutingModule } from './signup-professional-routing.module';

import { SignupProfessionalPage } from './signup-professional.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupProfessionalPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [SignupProfessionalPage]
})
export class SignupProfessionalPageModule {}
