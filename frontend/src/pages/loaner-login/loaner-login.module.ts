import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanerLoginPage } from './loaner-login';

@NgModule({
  declarations: [
    LoanerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanerLoginPage),
  ],
})
export class LoanerLoginPageModule {}
