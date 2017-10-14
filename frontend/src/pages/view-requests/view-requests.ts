import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Import the Doggos api
import {HttpClient} from "@angular/common/http";
import {DoggosApi} from '../../api/DoggosApi';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http_client: HttpClient) {

    this.doggos_api = new DoggosApi(this.http_client);

    this.mode = this.navParams.get("user_type");

    if (this.mode == "borrower") {
      let that = this;
      let borrower_id:number = that.navParams.get("borrower_id");

      this.doggos_api.getIncomingBorrowerRequests(borrower_id).then (function (requests) {
        that.incoming_requests = requests;
        console.log(that.incoming_requests);
      })

    }else if (this.mode == "loaner"){

      let that = this;
      let loaner_id:number = that.navParams.get("loaner_id");

      that.doggos_api.getIncomingPetRequests(loaner_id).then (function (requests) {
        that.incoming_requests = requests;
        console.log(that.incoming_requests);
      })

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRequestsPage');
  }

}
