import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ViewPetsPage} from '../view-pets/view-pets';

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

  viewPets() {
    this.navCtrl.push(ViewPetsPage, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowerViewPage');
  }

}
