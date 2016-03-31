import {Page, NavController} from 'ionic-angular'
import {Page2} from '../page2/page2'
@Page({
  template: `
    <ion-navbar *navbar hideBackButton>
  <ion-title>QuizzTheme</ion-title>
</ion-navbar>

<ion-content class="has-header components-demo">

    <ion-list>

      <ion-item>
          <ion-label floating name="username">Username</ion-label>
          <ion-input type="text" value=""></ion-input>  
      </ion-item>


      <ion-item>
        <ion-label floating>Password</ion-label>
        <ion-input type="password" value=""></ion-input>
      </ion-item>

    </ion-list>

    <div padding>
        
      <button (click)="goToPage2()">LOG IN</button>
    </div>

</ion-content>
  `
})
export class Page1 {
  constructor(nav:NavController) {
    this.nav = nav
  }
  goToPage2() {
    this.nav.push(Page2)
  }

}

