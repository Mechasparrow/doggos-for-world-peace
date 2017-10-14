import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Loaner} from '../../models/Loaner';

/**
 * Generated class for the LoanerViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loaner-view',
  templateUrl: 'loaner-view.html',
})
export class LoanerViewPage {

  public loaner:Loaner = new Loaner();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loaner = <Loaner> this.navParams.get('loaner');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanerViewPage');
  }

}
