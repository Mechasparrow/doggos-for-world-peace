import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Loaner} from '../../models/Loaner';

//Import the Doggo Api
import {HttpClient} from '@angular/common/http';
import {DoggosApi} from '../../api/DoggosApi';

//Import the pages
import {LoanerPetViewPage} from '../loaner-pet-view/loaner-pet-view';
import {ViewBorrowersPage} from '../view-borrowers/view-borrowers';

import {ViewRequestsPage} from '../view-requests/view-requests';
import {MatchsViewPage} from '../matchs-view/matchs-view';

import {NewPetPage} from '../new-pet/new-pet';

/**
 * Generated class for the LoanerViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loaner-view',
  templateUrl: 'loaner-view.html',
})
export class LoanerViewPage {

  public loaner:Loaner = new Loaner();
  private doggo_api:DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient) {
    this.doggo_api = new DoggosApi(this.http_client)

    this.loaner = <Loaner> this.navParams.get('loaner');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanerViewPage');
  }

  viewBorrowers() {
      this.navCtrl.push(ViewBorrowersPage, {});
  }

  viewPets() {
    this.navCtrl.push(LoanerPetViewPage, {
      loaner: this.loaner
    });
  }

  createPet() {

    this.navCtrl.push(NewPetPage, {
      loaner_id: this.loaner.loaner_id
    })

  }

  viewRequests() {
    this.navCtrl.push(ViewRequestsPage, {
      user_type: "loaner",
      loaner_id: this.loaner.loaner_id,
    })
  }

  viewMatches() {

    this.navCtrl.push(MatchsViewPage, {
      user_type: "loaner",
      loaner_id: this.loaner.loaner_id
    })

  }


}
