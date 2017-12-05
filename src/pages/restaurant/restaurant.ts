import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantPage {
	item: object;

  constructor(public navCtrl: NavController, params: NavParams) {
  	this.item = params.get('item');
  	console.log(this.item);
  }

}
