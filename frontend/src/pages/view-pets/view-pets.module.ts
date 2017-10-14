import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPetsPage } from './view-pets';

@NgModule({
  declarations: [
    ViewPetsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPetsPage),
  ],
})
export class ViewPetsPageModule {}
