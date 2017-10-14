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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BorrowerLoginPage,
    BorrowerViewPage,
    LoanerLoginPage,
    LoanerViewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BorrowerLoginPage,
    BorrowerViewPage,
    LoanerLoginPage
    LoanerViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
