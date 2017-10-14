import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowerViewPage } from './borrower-view';

@NgModule({
  declarations: [
    BorrowerViewPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowerViewPage),
  ],
})
export class BorrowerViewPageModule {}
