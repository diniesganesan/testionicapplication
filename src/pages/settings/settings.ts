import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {ToastController} from 'ionic-angular';
import { RedditPage } from '../reddits/reddit';


@Component({
  selector: 'settings',
  templateUrl: 'setting.html'
})
export class SettingsPage {
  //set them as properties
  category:any;
  limit:any;
  constructor(public navCtrl: NavController, private redditService:RedditService, public toastCtrl:ToastController) {
    this.getDefaults();
  }


  getDefaults(){
    if(localStorage.getItem('category')!= null && localStorage.getItem('limit')!= null){
      this.category = localStorage.getItem('category');
      this.limit = localStorage.getItem('limit');
    }else{
      this.category = 'sports';
      this.limit = 5;
    }
  }

  setDefaults(){
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditPage);
  }

}
