import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PreloadImage } from '../helpers/preload-image/preload-image';
import { BackgroundImage } from '../helpers/background-image/background-image';
import { ShowHideContainer } from '../helpers/show-hide-password/show-hide-container';
import { ShowHideInput } from '../helpers/show-hide-password/show-hide-input';
import { ColorRadio } from '../helpers/color-radio/color-radio';
import { CounterInput } from '../helpers/counter-input/counter-input';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
