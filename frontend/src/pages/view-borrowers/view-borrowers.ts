import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Borrower} from '../../models/Borrower';

//Import the DoggoApi
import {DoggosApi} from '../../api/DoggosApi';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the ViewBorrowersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-borrowers',
  templateUrl: 'view-borrowers.html',
})
export class ViewBorrowersPage {

  public doggos_api:DoggosApi;

  public borrowers:Borrower[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client:HttpClient) {
    this.doggos_api = new DoggosApi(http_client);

    let that = this;

    this.doggos_api.getBorrowers().then (function (borrowers) {
      that.borrowers = <Borrower[]>borrowers;
    }).catch (function (error) {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBorrowersPage');
  }

}
