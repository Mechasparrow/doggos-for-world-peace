import {Loaner} from "../models/Loaner";
import {Borrower} from "../models/Borrower";

export class DoggosApi {


  static LoanerLogin(username: string, password: string) {

    var new_loaner:Loaner = <Loaner> {
      loaner_id: 1,
      name: "Paul",
      lat: 45,
      lon: 45
    }

    var login_promise = new Promise(function (resolve, reject) {

      resolve (new_loaner);

    })

    return login_promise;

  }

  static BorrowerLogin(username:string, password:string) {

    var new_borrower = <Borrower> {
      borrower_id: 1,
      name: "Dana",
      lat: 40,
      lon: 30,
      preferences: "Meh"
    }

    var login_promise = new Promise (function (resolve, reject) {
      resolve(new_borrower);
    })

    return login_promise;


  }

}
