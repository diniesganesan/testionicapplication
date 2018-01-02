import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import {DetailsPage} from '../details/details';
import {ToastController} from 'ionic-angular';


@Component({
  selector: 'reddits',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  //set them as properties
  items: any;
  category:any;
  limit:any;
  constructor(public navCtrl: NavController, private redditService:RedditService, public toastCtrl:ToastController) {
    this.getDefaults();
  }

  ngOnInit(){
    this.getPost(this.category, this.limit);
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

  getPost(category, limit){
    this.redditService.getPost(category,limit).subscribe(response => {
      this.items = response.data.children;
      console.log(response);
    });
  }

  viewItem(x){
    this.navCtrl.push(DetailsPage, {item:x});
  }

  clickOnMe(){
    this.getPost(this.category, this.limit);
      const toast = this.toastCtrl.create({
        message: this.category+' is selected.',
        duration: 2000
      });
      toast.present();
  }

}
