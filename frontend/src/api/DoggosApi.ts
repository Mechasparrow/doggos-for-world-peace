import {Loaner} from "../models/Loaner";
import {Borrower} from "../models/Borrower";
import {Pet} from '../models/Pet';
import {Contact} from '../models/Contact';

import {HttpClient} from '@angular/common/http';


//var backend_host = "https://doggos-for-world-peace.herokuapp.com";
var backend_host = "http://localhost:3000";
export class DoggosApi {

  constructor(private http: HttpClient) {

  }

  getPetOwner(pet:Pet) {

    let that = this;

    var owner_promise = new Promise(function (resolve, reject) {

      that.getLoaners().then (function (loaners:any) {
        var owner = loaners.find(function (loaner) {
          return loaner.loaner_id == pet.owner_id;
        })

        resolve(owner);
      }).catch (function (error) {
        reject(error);
      })

    })

    return owner_promise;

  }

  getLoanerContact(our_loaner:Loaner) {

    let that = this;

    var contact_promise = new Promise (function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(data => {

        var loaners = (<any>data).loaners;

        var loaner:any = loaners.find (function (loaner, index) {
          return index == our_loaner.loaner_id;
        })

        var contact:Contact = <Contact> loaner.contact;

        resolve(contact);

      })


    })

    return contact_promise;

  }

  getBorrowerContact(our_borrower:Borrower) {
    let that = this;

    var contact_promise = new Promise (function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(data => {

        var borrowers = (<any>data).borrowers;

        var borrower:any = borrowers.find (function (borrower, index) {
          return index == our_borrower.borrower_id;
        })

        var contact:Contact = <Contact> borrower.contact;

        resolve(contact);

      })


    })

    return contact_promise;
  }

  getPets() {
      let that = this;

      var pets_promise = new Promise(function (resolve, reject) {

        that.http.get(backend_host + "/database.json").subscribe(data => {
          var pets = (<any>data).pets;
          var pet_keys = Object.keys(<any>pets);

          var new_pets = (<any>pet_keys).map(function (item, index) {
            var selected_pet:any = pets[item];
            var pet = <Pet> {
              name: selected_pet.name,
              pet_id: index,
              owner_id: parseInt(selected_pet.owner),
              img: selected_pet.img,
              age: selected_pet.age,
              breed: selected_pet.breed,
              size: selected_pet.size,
              care: selected_pet.care,
              description: selected_pet.description
            }
            return pet;

          })

          resolve(new_pets);

        })


      })

      return pets_promise;

  }


  getBorrowers() {

    let that = this;

    var borrowers_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(data => {
        var borrowers = (<any>data).borrowers;
        var borrower_keys = Object.keys(<any>borrowers);


        var new_borrowers = (<any>borrower_keys).map(function (item, index) {
          var selected_borrower = borrowers[item];

          var borrower:Borrower = <Borrower> {
            borrower_id: index,
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

      that.http.get(backend_host + "/database.json").subscribe(data => {
        var loaners = (<any>data).loaners;
        var loaners_keys = Object.keys(<any>loaners);

        var new_loaners = loaners_keys.map(function (item,index) {

          var selected_loaner = loaners[item];

          var loaner:Loaner = <Loaner> {
            loaner_id: index,
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

  getPetMatches(loaner_id:number) {

    let that = this;

    var matches_promise = new Promise(function (resolve, reject) {

        that.http.get(backend_host + "/database.json").subscribe(function (data) {

          var all_pets = (<any>data).pets;

          all_pets = all_pets.map(function (item, index) {
            var new_pet = item;
            new_pet.pet_id = index;
            return new_pet;
          });

          var matches:any = [];

          var pets:any = all_pets.filter(function (pet:any, index:number) {
            return pet.owner == loaner_id.toString();
          })

          pets.map(function (pet) {

            console.log(pet);

            var pet_matches = pet.requests.matches.map(function (match:any) {
              var new_match:any = {
                opposer: match,
                pet_id: pet.pet_id
              };

              return new_match;

            });

            matches = matches.concat(pet_matches);

          });

          resolve(matches);

      })
    });

    return matches_promise;

  }

  getIncomingPetRequests(loaner_id:number) {

    let that = this;

    var request_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(function (data) {

        var all_pets = (<any>data).pets;

        all_pets = all_pets.map(function (item, index) {
          var new_pet = item;
          new_pet.pet_id = index;
          return new_pet;
        });

        var requests:any = [];

        var pets:any = all_pets.filter(function (pet:any, index:number) {
          return pet.owner == loaner_id.toString();
        })

        pets.map(function (pet) {

          console.log(pet);

          var pet_requests = pet.requests.incoming.map(function (request:any, index:number) {
            var new_request:any = request;
            new_request.pet_id = pet.pet_id;
            new_request.request_id = index;
            return new_request;

          });

          requests = requests.concat(pet_requests);

        })

        resolve(requests);

      })

    })

    return request_promise;

  }

  getBorrowerMatches(borrower_id:number) {

    let that = this;

    var match_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(function (data) {
        var borrowers:any = (<any>data).borrowers;

        var borrower:any = borrowers.find(function (item, index) {
          return index == borrower_id;
        })

        var matches = borrower.requests.matches.map(function (match) {
          var new_match:any = {
            opposer: match
          }

          return new_match;
        });

        resolve(matches);

      })

    })

    return match_promise;

  }

  getIncomingBorrowerRequests(borrower_id:number) {

    let that = this;

    var request_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/database.json").subscribe(function (data) {
        var borrowers:any = (<any>data).borrowers;

        var borrower:any = borrowers.find(function (item, index) {
          return index == borrower_id;
        })

        var incoming_requests = borrower.requests.incoming.map(function (request, index) {
          var new_request:any = request;
          new_request.request_id = index;
          return new_request
        })

        resolve(incoming_requests);

      })

    })

    return request_promise;

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

  sendBorrowRequest(borrower_id: number, pet_id: number) {

    let that = this;

    var request_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/borrower/send/request" + "?" + "borrower_uid=" + borrower_id + "&" + "pet_uid=" + pet_id ).subscribe(function (data) {

        console.log(data);
        resolve(data);

      })

    })

    return (request_promise);

  }

  sendLoanRequest(borrower_id: number, pet_id: number) {

    let that = this;

    var request_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/loaner/send/request" + "?" + "borrower_uid=" + borrower_id + "&" + "pet_uid=" + pet_id ).subscribe(function (data) {

        console.log(data);
        resolve(data);

      })

    })

    return (request_promise);

  }

  acceptLoanRequest(borrower_id, request_id) {

    let that = this;

    var request_promise = new Promise(function (resolve, reject) {

      that.http.get(backend_host + "/borrower/accept/request" + "?" + "borrower_uid=" + borrower_id + "&" + "request_uid=" + request_id ).subscribe(function (data) {

        console.log(data);
        resolve(data);
      })


    })

    return (request_promise);


  }

}
