import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Borrower} from '../../models/Borrower';

/**
 * Generated class for the BorrowerViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrower-view',
  templateUrl: 'borrower-view.html',
})
export class BorrowerViewPage {

  public borrower:Borrower = new Borrower();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.borrower = <Borrower>this.navParams.get('borrower');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowerViewPage');
  }

}
