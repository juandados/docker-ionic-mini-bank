import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddBanksPage } from '../pages/add-banks/add-banks';
import { ListBanksPage } from '../pages/list-banks/list-banks';
import { AddBankProvider } from '../providers/add-bank/add-bank';
import { ListBanksProvider } from '../providers/list-banks/list-banks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBanksPage,
    ListBanksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBanksPage,
    ListBanksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddBankProvider,
    ListBanksProvider
  ]
})
export class AppModule {}
