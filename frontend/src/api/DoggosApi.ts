import {Loaner} from "../models/Loaner";
import {Borrower} from "../models/Borrower";

import {HttpClient} from '@angular/common/http';




export class DoggosApi {

  constructor(private http: HttpClient) {

  }

  getBorrowers() {

    let that = this;

    var borrowers_promise = new Promise(function (resolve, reject) {

      that.http.get('/assets/data/data.json').subscribe(data => {
        var borrowers = (<any>data).borrowers;
        var borrower_keys = Object.keys(<any>borrowers);


        var new_borrowers = (<any>borrower_keys).map(function (item) {
          var selected_borrower = borrowers[item];

          var borrower:Borrower = <Borrower> {
            borrower_id: item,
            name: (<any>selected_borrower).bio.name,
            profile: (<any>selected_borrower).bio.profile,
            img: (<any>selected_borrower).img,
            auth_username: (<any>selected_borrower).auth.username,
            auth_password: (<any>selected_borrower).auth.password,
            geo_lat: (<any>selected_borrower).geo.lat,
            geo_lon: (<any>selected_borrower).geo.lon,
            schedule_start: (<any>selected_borrower).schedule.start,
            schedule_end: (<any>selected_borrower).schedule.stop,
            days: (<any>selected_borrower).schedule.days
          }

          return borrower;
        })

        resolve(new_borrowers);
      });

    })

    return borrowers_promise;

  }

  getLoaners() {

    let that = this;

    var loaners_promise = new Promise(function (resolve, reject) {

      that.http.get('/assets/data/data.json').subscribe(data => {
        var loaners = (<any>data).loaners;
        var loaners_keys = Object.keys(<any>loaners);

        var new_loaners = loaners_keys.map(function (item) {

          var selected_loaner = loaners[item];

          var loaner:Loaner = <Loaner> {
            loaner_id: parseInt(item),
            auth_username: (<any>selected_loaner).auth.username,
            auth_password: (<any>selected_loaner).auth.password,
            name: (<any>selected_loaner).bio.name,
            profile: (<any>selected_loaner).bio.profile,
            geo_lat: (<any>selected_loaner).geo.lat,
            geo_lon: (<any>selected_loaner).geo.lon,
            days: (<any>selected_loaner).schedule.days,
            work_start: (<any>selected_loaner).schedule.start,
            work_stop: (<any>selected_loaner).schedule.stop
          }

          return loaner;

        })

        resolve(new_loaners);

      });

    })

    return loaners_promise;

  }

  LoanerLogin(username: string, password: string) {

    let that = this;

    var login_promise = new Promise(function (resolve, reject) {

      that.getLoaners().then (function (loaners) {

        var loaner = (<any>loaners).find(function (loaner) {
          return loaner.auth_username == username;
        });

        if (loaner.auth_password == password) {
          resolve(loaner);
        }else {
          reject("wrong password");
        }

      })


    })

    return login_promise;

  }

  BorrowerLogin(username:string, password:string) {

    let that = this;

    var login_promise = new Promise (function (resolve, reject) {

      that.getBorrowers().then (function (borrowers) {

        var borrower = (<any>borrowers).find(function (borrower) {
          return borrower.auth_username == username;
        });

        if (borrower.auth_password == password) {
          resolve(borrower);
        }else {
          reject("wrong password");
        }

      })

    })

    return login_promise;


  }

}
