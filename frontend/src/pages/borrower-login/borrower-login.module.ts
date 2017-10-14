import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowerLoginPage } from './borrower-login';

@NgModule({
  declarations: [
    BorrowerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowerLoginPage),
  ],
})
export class BorrowerLoginPageModule {}
