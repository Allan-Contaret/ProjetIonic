import {Page, NavController} from 'ionic-angular'
import {Page2} from '../page2/page2'
@Page({
  template: `
    <ion-navbar *navbar hideBackButton>
  <ion-title>QuizzTheme</ion-title>
</ion-navbar>

<ion-content padding class="page1">

    <div padding>
        
      <button block (click)="goToPage2()">ENTRER</button>
    </div>

</ion-content>
  `
})export class Page1 {
  constructor(nav: NavController) {
    this.nav = nav
  }
  goToPage2() {
    this.nav.push(Page2)
  }

}

