import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DoggosApi} from '../../api/DoggosApi';

/**
 * Generated class for the LoanerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loaner-login',
  templateUrl: 'loaner-login.html',
})
export class LoanerLoginPage {

  public login:any = {
    username: "",
    password: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanerLoginPage');
  }

  onSubmit() {

    var login_promise = DoggosApi.LoanerLogin(this.login.username, this.login.password);

    login_promise.then (function (loaner) {
      alert("login success!");
    })


  }

}
