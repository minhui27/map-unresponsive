import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	rootNav: NavController;

  constructor(public navCtrl: NavController, public appCtrl: App) {
  	this.rootNav = this.appCtrl.getRootNavs()[0];
  }

  goRestaurant() {
  	this.rootNav.push('RestaurantPage', {item: {name: 'Testing', phone: '0123456789', address: 'Test address...'}});
  }

}
