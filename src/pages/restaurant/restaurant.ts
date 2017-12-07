import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
	item: object;

  constructor(public navCtrl: NavController, public events: Events, params: NavParams) {
  	this.item = params.get('item');
  }

  ionViewWillEnter() {
  	this.events.publish('BackToDirectoryPage', false);
  }

  ionViewDidLeave() {
  	this.events.publish('BackToDirectoryPage', true);
  }

  viewLocation() {
  	this.navCtrl.push('LocationPage',
  		{
  			item: {
		      lat: this.item['position']['lat'],
		      lng: this.item['position']['lng'],
		      name: this.item['name']
		  	}
    	}
  	);
  }

}
