import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Borrower} from '../../models/Borrower';
import {Loaner} from '../../models/Loaner';
import {Pet} from '../../models/Pet';

//Import the DoggoApi
import {DoggosApi} from '../../api/DoggosApi';
import {HttpClient} from '@angular/common/http';

//Modals
import {ModalController} from 'ionic-angular';
import {PetSelectComponent} from '../../components/pet-select/pet-select';

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
  public loaner: Loaner;
  public pets: Pet[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client:HttpClient, public modalCtrl: ModalController) {
    this.doggos_api = new DoggosApi(http_client);

    this.loaner = this.navParams.get("loaner");

    let that = this;

    this.doggos_api.getPets().then (function (pets: Pet[]) {
      that.pets = pets.filter(function (pet) {
        return pet.owner_id == that.loaner.loaner_id;
      })
    })

    this.doggos_api.getBorrowers().then (function (borrowers) {
      that.borrowers = <Borrower[]>borrowers;
    }).catch (function (error) {
      console.log(error);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBorrowersPage');
  }

  request(borrower_id) {

    let that = this;

    const petsModal = this.modalCtrl.create(PetSelectComponent, {
      pets: this.pets
    })

    petsModal.onDidDismiss(function (data) {
      if (data == null) {
        return;
      }

      var pet_id:number = data;

      that.doggos_api.sendLoanRequest(borrower_id, pet_id).then (function (result) {
        alert("success");
      }).catch (function (error) {
        alert("unable to make request");
      })

    })


    petsModal.present();

  }

}
