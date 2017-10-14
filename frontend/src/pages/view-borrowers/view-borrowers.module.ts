import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBorrowersPage } from './view-borrowers';

@NgModule({
  declarations: [
    ViewBorrowersPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBorrowersPage),
  ],
})
export class ViewBorrowersPageModule {}
