import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import the Pet model
import { Pet } from '../../models/Pet';

//Import the Doggos Api
import {HttpClient} from '@angular/common/http';
import {DoggosApi} from '../../api/DoggosApi';

/**
 * Generated class for the ViewPetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-pets',
  templateUrl: 'view-pets.html',
})
export class ViewPetsPage {

  public pets: Pet[] = [];
  public borrower: Borrower;
  private doggos_api: DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient) {
    this.doggos_api = new DoggosApi(this.http_client);

    this.borrower = navParams.get("borrower");

    let that = this;

    this.doggos_api.getPets().then (function (pets) {

      that.pets = <Pet[]> pets;

    }).then (function () {
      console.log(that.pets);
    })

  }

  request(pet:Pet) {

    this.doggos_api.sendBorrowRequest(this.borrower.borrower_id, pet.pet_id).then (function (result) {
      alert("request sent!");
    }).catch (function (error) {
      alert("unable to send request");
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPetsPage');
  }

}
