import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Loaner} from '../../models/Loaner';
import {Borrower} from '../../models/Borrower';
import {Pet} from '../../models/Pet';

//Import the Doggos api
import {HttpClient} from "@angular/common/http";
import {DoggosApi} from '../../api/DoggosApi';

import {MatchsViewPage} from '../matchs-view/matchs-view';

/**
 * Generated class for the ViewRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-requests',
  templateUrl: 'view-requests.html',
})
export class ViewRequestsPage {

  public incoming_requests:any = [];
  public mode:string = "";
  private doggos_api:DoggosApi;

  public borrowers:Borrower[];
  public loaners: Loaner[];
  public pets: Pet[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient) {

    this.doggos_api = new DoggosApi(this.http_client);

    this.mode = this.navParams.get("user_type");

    let that = this;

    that.doggos_api.getPets().then (function (pets) {
      that.pets = <Pet[]> pets;
    })

    that.doggos_api.getBorrowers().then (function (borrowers) {
      that.borrowers = <Borrower[]> borrowers;
    })

    that.doggos_api.getLoaners().then (function (loaners) {
      that.loaners = <Loaner[]> loaners;
    })

    if (this.mode == "borrower") {
      let that = this;
      let borrower_id:number = that.navParams.get("borrower_id");

      this.doggos_api.getIncomingBorrowerRequests(borrower_id).then (function (requests) {
        that.incoming_requests = requests;
        console.log(that.incoming_requests);
      });

    }else if (this.mode == "loaner"){

      let that = this;
      let loaner_id:number = that.navParams.get("loaner_id");

      that.doggos_api.getIncomingPetRequests(loaner_id).then (function (requests) {
        that.incoming_requests = requests;
      });

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRequestsPage');
  }

  renderOpposer(opposer_id) {
    if (this.mode == "borrower") {
      return this.loaners[opposer_id].name;
    }else if (this.mode == "loaner") {
      return this.borrowers[opposer_id].name;
    }
  }

  renderImage(request) {
    if (this.mode == "loaner") {
      return this.borrowers[request.from].img;
    }else if (this.mode == "borrower") {
      return "";
    }
  }

  confirmBorrower(request:any) {
    var request_id = request.request_id;
    var borrower_id = this.navParams.get("borrower_id");

    let that = this;

    this.doggos_api.acceptLoanRequest(borrower_id, request_id).then (function (result) {
      alert ("you have matched!");

      that.navCtrl.pop();

      that.navCtrl.push(MatchsViewPage, {
        user_type: "borrower",
        borrower_id: borrower_id
      })


    }).catch (function (error) {
      alert("unable to match");
    })

  }

  confirmLoaner(request:any) {
    var request_id = request.request_id;
    var pet_id = request.pet_id;
    var loaner_id = this.navParams.get("loaner_id");

    let that = this;

    this.doggos_api.acceptBorrowRequest(pet_id, request_id).then (function (result) {
      alert("You have matched!");

      that.navCtrl.pop();

      that.navCtrl.push(MatchsViewPage, {
        user_type: "loaner",
        loaner_id: loaner_id
      })

    }).catch (function (error) {
      alert("unable to match");
    })



  }

}
