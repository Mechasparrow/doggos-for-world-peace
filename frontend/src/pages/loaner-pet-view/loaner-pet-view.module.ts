import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanerPetViewPage } from './loaner-pet-view';

@NgModule({
  declarations: [
    LoanerPetViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanerPetViewPage),
  ],
})
export class LoanerPetViewPageModule {}
