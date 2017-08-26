import { Component, ViewChild } from '@angular/core';

import { SuperTabsConfig, SuperTabs } from 'ionic2-super-tabs';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DirectoryPage } from '../directory/directory';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
	@ViewChild(SuperTabs) superTabs: SuperTabs;
	config: SuperTabsConfig;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  directoryRoot = DirectoryPage;

  constructor() {

  	this.config = {
      sideMenu: 'left',
      shortSwipeDuration: 9999,
      dragThreshold: 100
      // prevent tab drag event fired
      // dragThreshold: window.screen.width + 100,
  };

  }
}
