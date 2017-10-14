import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClient} from '@angular/common/http';
import {DoggosApi} from '../../api/DoggosApi';

import {LoanerViewPage} from '../loaner-view/loaner-view';

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

  public doggos_api:DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.doggos_api = new DoggosApi(http);
    this.doggos_api.getLoaners().then (function (loaners) {
      console.log(loaners);
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanerLoginPage');
  }

  onSubmit() {

    var login_promise = this.doggos_api.LoanerLogin(this.login.username, this.login.password);

    let that = this;

    login_promise.then (function (loaner) {
      that.navCtrl.push( LoanerViewPage, {
        loaner: loaner
      })
    }).catch(function (error) {
      alert(error);
    })


  }

}
