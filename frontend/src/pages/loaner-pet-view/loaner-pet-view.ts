import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Pet} from '../../models/Pet';
import {Loaner} from '../../models/Loaner';

//Import the DoggoApi
import {HttpClient} from '@angular/common/http';
import {DoggosApi} from '../../api/DoggosApi';

/**
 * Generated class for the LoanerPetViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loaner-pet-view',
  templateUrl: 'loaner-pet-view.html',
})
export class LoanerPetViewPage {

  public loaner:Loaner;
  public loaner_pets:Pet[] = [];
  private doggos_api:DoggosApi;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient) {

    this.loaner = <Loaner> navParams.get('loaner');
    this.doggos_api = new DoggosApi(http_client);

    let that = this;

    this.doggos_api.getPets().then (function (pets) {
        var loaner_id = that.loaner.loaner_id;

        that.loaner_pets = <Pet[]>(<any>pets).filter( function (item) {
          return item.owner_id == loaner_id;
        })

    }).then (function () {
      console.log(that.loaner_pets);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanerPetViewPage');
  }

}
