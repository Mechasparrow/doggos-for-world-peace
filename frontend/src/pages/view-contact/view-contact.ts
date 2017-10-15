import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {Contact} from '../../models/Contact';

@IonicPage()
@Component({
  selector: 'page-view-contact',
  templateUrl: 'view-contact.html',
})
export class ViewContactPage {

  public name:string = "";
  public contact:Contact = new Contact();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = navParams.get("name");
    this.contact = navParams.get("contact");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewContactPage');
  }

}
