import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HttpClient} from '@angular/common/http';
import {DoggosApi} from '../../api/DoggosApi';

//Borrower view page
import {BorrowerViewPage} from '../borrower-view/borrower-view';

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

  public doggos_api:DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

    this.doggos_api = new DoggosApi(http);
    this.doggos_api.getBorrowers().then (function (borrowers) {
      console.log(borrowers);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BorrowerLoginPage');
  }

  onSubmit() {

    var login_promise = this.doggos_api.BorrowerLogin(this.login.username, this.login.password);

    let that = this;

    login_promise.then (function (borrower) {

      that.navCtrl.push (BorrowerViewPage , {
        borrower: borrower
      })

    }).catch (function (error) {
      alert(error);
    })

  }

}
