import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanerViewPage } from './loaner-view';

@NgModule({
  declarations: [
    LoanerViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanerViewPage),
  ],
})
export class LoanerViewPageModule {}
