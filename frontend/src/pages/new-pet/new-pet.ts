import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewPetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-pet',
  templateUrl: 'new-pet.html',
})
export class NewPetPage {

  public pet: any = {
    name: "",
    img: "",
    age: "",
    medical: "",
    personality: "",
    care: "",
    description: "",
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPetPage');
  }

  onSubmit() {
    console.log("Save the Pet");
    alert("Create pets is a WIP feature");
  }

}
