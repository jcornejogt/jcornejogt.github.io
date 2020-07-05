import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu/side-menu.component';



@NgModule({
  declarations: [SideMenuComponent, SlidesComponent, StartComponent,LogoComponent],
  exports: [SideMenuComponent, SlidesComponent, StartComponent,LogoComponent],
  imports: [
    CommonModule,IonicModule.forRoot()
  ]
})
export class ComponentsModule { }
