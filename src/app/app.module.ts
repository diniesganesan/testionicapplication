import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { RedditPage } from '../pages/reddits/reddit';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DetailsPage} from '../pages/details/details';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    RedditPage,
    DetailsPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    RedditPage,
    DetailsPage,
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
