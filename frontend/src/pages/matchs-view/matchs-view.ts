import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import the api

import {HttpClient} from "@angular/common/http";
import {DoggosApi} from "../../api/DoggosApi";

//Import models

import {Loaner} from '../../models/Loaner';
import {Borrower} from '../../models/Borrower';

/**
 * Generated class for the MatchsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matchs-view',
  templateUrl: 'matchs-view.html',
})
export class MatchsViewPage {

  public matches:any = [];

  public user_type:string = "";
  public loaners: Loaner[];
  public borrowers: Borrower[];

  private doggos_api:DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient ) {

    this.doggos_api = new DoggosApi(this.http_client);
    this.user_type = navParams.get("user_type");

    let that = this;

    that.doggos_api.getLoaners().then (function (loaners) {
      that.loaners = <Loaner[]> loaners;
    })

    that.doggos_api.getBorrowers().then (function (borrowers) {
      that.borrowers = <Borrower[]> borrowers;
    })

    if (this.user_type == "loaner") {

      var loaner_id = that.navParams.get("loaner_id");

      that.doggos_api.getPetMatches(loaner_id).then (function (matches) {
        that.matches = matches;
        console.log(that.matches);
      })

    } else if (this.user_type == "borrower") {

      var borrower_id = that.navParams.get("borrower_id");

      that.doggos_api.getBorrowerMatches(borrower_id).then (function (matches) {
        that.matches = matches;
        console.log(that.matches);
      })

    }

  }

  renderOpposer(opposer_id) {

    if (this.user_type == "borrower") {
      return this.loaners[opposer_id].name;
    }else if (this.user_type == "loaner") {
      return this.borrowers[opposer_id].name;
    }

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchsViewPage');
  }

}
