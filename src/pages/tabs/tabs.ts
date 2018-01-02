import { Component } from '@angular/core';

import { RedditPage } from '../reddits/reddit';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
  tab2Root = SettingsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
