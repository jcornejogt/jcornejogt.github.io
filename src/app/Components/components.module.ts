import { ModalPurchaseComponent } from 'src/app/Components/modal-purchase/modal-purchase.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PayPal } from '@ionic-native/paypal/ngx';



@NgModule({
  declarations: [SideMenuComponent, SlidesComponent, StartComponent,LogoComponent],
  exports: [SideMenuComponent, SlidesComponent, StartComponent,LogoComponent],
  imports: [
    CommonModule,IonicModule.forRoot()
  ],
  providers: [
    PayPal
  ],
})
export class ComponentsModule { }
