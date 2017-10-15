import { Component } from '@angular/core';

import {Pet} from '../../models/Pet';

import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the PetSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pet-select',
  templateUrl: 'pet-select.html'
})
export class PetSelectComponent {

  public pets: Pet[];
  public selected_pet_string: string

  constructor(params: NavParams, public viewCtrl: ViewController) {

    this.pets = params.get('pets');
    this.selected_pet_string = this.pets[0].name;

  }

  submit() {
    var selected_pet: Pet;

    let that = this;

    selected_pet = this.pets.find(function (pet) {
      return pet.name == that.selected_pet_string
    })

    this.viewCtrl.dismiss(selected_pet.pet_id);

  }

  cancel() {

    this.viewCtrl.dismiss();

  }

}
