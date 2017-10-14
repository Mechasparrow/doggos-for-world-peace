import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DoggosApi} from '../../api/DoggosApi';

/**
 * Generated class for the BorrowerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-borrower-login',
  templateUrl: 'borrower-login.html',
})
export class BorrowerLoginPage {

  public login:any = {
    username: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowerLoginPage');
  }

  onSubmit() {

    var login_promise = DoggosApi.BorrowerLogin(this.login.username, this.login.password);

    login_promise.then (function (borrower) {
      alert("Login success!");
    })

  }

}
