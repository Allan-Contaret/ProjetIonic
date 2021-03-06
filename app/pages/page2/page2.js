import {Page, NavController} from 'ionic-angular'
import {Page3} from '../sports/page3'
import {Musique} from '../Musique/musique'
import {Jeux} from '../jeux_video/jeux_video'


@Page({
  template:`
   <ion-navbar *navbar hideBackButton class="show-navbar">
  <ion-title>Themes</ion-title>
</ion-navbar>

<ion-content class="has-header components-demo cards-bg">

  <ion-card>

    <img src="http://www.gorimouski.com/upload/16/images/blog/tell%20what%20u%20think%20sports.jpg"/>

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
        <button clear small danger (click)="goToSports()">
          <ion-icon name=''></ion-icon>
          JOUER!
        </button>
      </ion-col>
    </ion-row>

  </ion-card>

  <ion-card>

    <div>
      <img src="http://www.france2.fr/emissions/sites/default/files/images/logo-site/2013/02/05/noubliez-pas-les-paroles-6201-39149.png"/>
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
        <button clear small danger (click)="goToMusique()">
          <ion-icon name=''></ion-icon>
          JOUER!
        </button>
      </ion-col>      
    </ion-row>

  </ion-card>

  <ion-card>

    <div>
      <img src="http://www.bm-dijon.fr/OpacWebAloes/Images/Paragraphes/game/JEUX-V~1.JPG"/>
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
        <button clear small danger (click)="goToJeux()">
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
  goToSports() {
    this.nav.push(Page3)
  }
  goToMusique() {
    this.nav.push(Musique)
  }
  goToJeux() {
    this.nav.push(Jeux)
  }

}