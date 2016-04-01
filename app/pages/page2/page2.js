import {Page, NavController} from 'ionic-angular'
import {Page3} from '../page3/page3'


@Page({
  template:`
   <ion-navbar *navbar hideBackButton class="show-navbar">
  <ion-title>Themes</ion-title>
</ion-navbar>

<ion-content class="has-header components-demo cards-bg">

  <ion-card>

    <img src="/images/sports.jpg"/>

    <ion-card-content>
      <h2 class="card-title">
        Sports
      </h2>
      <p>
        Si vous aimez le sport, ce quizz est fait pour vous!
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col text-center>
        <button clear small danger (click)="goToPage3()">
          <ion-icon name=''></ion-icon>
          JOUER!
        </button>
      </ion-col>
    </ion-row>

  </ion-card>

  <ion-card>

    <div>
      <img src="/images/chant.png"/>
    </div>

    <ion-card-content>
      <h2 class="card-title">
        Musique
      </h2>
      <p>
      Si vous aimez la musique, ce quizz est fait pour vous!
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col text-center>
        <button clear small danger>
          <ion-icon name=''></ion-icon>
          JOUER!
        </button>
      </ion-col>      
    </ion-row>

  </ion-card>

  <ion-card>

    <div>
      <img src="/images/jeux.jpg"/>
    </div>

    <ion-card-content>
      <h2 class="card-title">
       		Jeux
      </h2>
      <p>
        Si vous aimez les jeux vidéos, ce quizz est fait pour vous!
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col text-center>
        <button clear small danger>
          <ion-icon name=''></ion-icon>
          JOUER!
        </button>
      </ion-col>
    </ion-row>

  </ion-card>

</ion-content>`
})export class Page2 {
  constructor(nav: NavController) {
    this.nav = nav
  }
  goToPage3() {
    this.nav.push(Page3)
  }

}