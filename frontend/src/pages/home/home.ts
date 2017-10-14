import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Import the login pages
import {LoanerLoginPage} from '../loaner-login/loaner-login';
import {BorrowerLoginPage} from '../borrower-login/borrower-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loginToBorrower() {


    this.navCtrl.push(BorrowerLoginPage, {});
  }

  loginToLoaner() {

    this.navCtrl.push(LoanerLoginPage, {})

  }

}
