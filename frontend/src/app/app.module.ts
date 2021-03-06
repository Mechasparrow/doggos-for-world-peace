import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Import the form module
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';

//Import the pages
import { HomePage } from '../pages/home/home';

//Import the login pages
import {BorrowerLoginPage} from '../pages/borrower-login/borrower-login';
import {LoanerLoginPage} from '../pages/loaner-login/loaner-login';

//Import the view pages
import {BorrowerViewPage} from '../pages/borrower-view/borrower-view';
import {LoanerViewPage} from '../pages/loaner-view/loaner-view';

import {LoanerPetViewPage} from '../pages/loaner-pet-view/loaner-pet-view';

import {ViewBorrowersPage} from '../pages/view-borrowers/view-borrowers';
import {ViewPetsPage} from '../pages/view-pets/view-pets';
import {ViewRequestsPage} from '../pages/view-requests/view-requests';
import {MatchsViewPage} from '../pages/matchs-view/matchs-view';
import {NewPetPage} from '../pages/new-pet/new-pet';
import {ViewContactPage} from '../pages/view-contact/view-contact';

//Modals
import {PetSelectComponent} from '../components/pet-select/pet-select';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BorrowerLoginPage,
    BorrowerViewPage,
    ViewBorrowersPage,
    LoanerLoginPage,
    LoanerViewPage,
    LoanerPetViewPage,
    ViewPetsPage,
    ViewRequestsPage,
    MatchsViewPage,
    NewPetPage,
    ViewContactPage,
    PetSelectComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BorrowerLoginPage,
    BorrowerViewPage,
    ViewBorrowersPage,
    LoanerLoginPage,
    LoanerViewPage,
    LoanerPetViewPage,
    ViewPetsPage,
    ViewRequestsPage,
    MatchsViewPage,
    NewPetPage,
    ViewContactPage,
    PetSelectComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
