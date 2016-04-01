import {Page} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../sports/page3';
import {Musique} from '../Musique/musique';
import {Jeux} from '../jeux_video/jeux_video'


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab2Root = Page2;
    this.tab3Root = Page3;
    this.tab4Root = Musique;
    this.tab5Root = Jeux;
  }
}
