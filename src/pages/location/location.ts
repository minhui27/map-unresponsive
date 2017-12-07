import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { GoogleMap, GoogleMaps, GoogleMapsEvent, LatLng, GoogleMapOptions } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  speMap: GoogleMap;
  location: LatLng;
	item: object;
  title: string = 'Restaurant';

  constructor(
    public navCtrl: NavController,
    public googleMaps: GoogleMaps,
    params: NavParams
   ) {

  	this.item = params.get('item');
    this.title = this.item['name'];
  }

  ionViewDidLoad() {
    this.location = new LatLng(this.item['lat'], this.item['lng']);

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.item['lat'],
          lng: this.item['lng']
        },
        zoom: 5,
        tilt: 30
      }
    };

    this.speMap = this.googleMaps.create('map_view_location', mapOptions);

    this.speMap.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('LocationPage: Map is ready...');
      this.speMap.addMarker({
        position: this.location,
        title: this.title
      });
    });
  }

  getDirection() {
    console.log('this will open the navigation app...');
  }

}
