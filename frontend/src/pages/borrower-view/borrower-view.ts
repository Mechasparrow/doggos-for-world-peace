import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ViewPetsPage} from '../view-pets/view-pets';
import {ViewRequestsPage} from '../view-requests/view-requests';

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
    console.log(this.borrower.borrower_id);
  }

  viewPets() {
    this.navCtrl.push(ViewPetsPage, {});
  }

  viewRequests() {
    this.navCtrl.push(ViewRequestsPage, {
      user_type: "borrower",
      borrower_id: this.borrower.borrower_id
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowerViewPage');
  }

}
