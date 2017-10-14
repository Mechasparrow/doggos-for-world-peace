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

}
