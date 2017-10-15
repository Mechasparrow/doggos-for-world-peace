import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchsViewPage } from './matchs-view';

@NgModule({
  declarations: [
    MatchsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchsViewPage),
  ],
})
export class MatchsViewPageModule {}
