import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/jeux_video/page3.html'
})
export class Jeux {

  constructor() {
    this.questions = [
      {
        imageUrl:'/images/minecraft.jpg',
        text: 'Quel item redstone permet de faire des impulsions ?',
        answers: [
          {
            text: 'Le repeater',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Le dispenser',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Le comparateur',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'Le dropper',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        imageUrl:'/images/pokemon.png',
        text: 'Combien de pokémon existe-t-il ?',
        answers: [
          {
            text: '716',
            isCorrect: false,
            selectedByUser: false
          },{
            text: '721',
            isCorrect: true,
            selectedByUser: false
          },{
            text: '726',
            isCorrect: false,
            selectedByUser: false
          },{
            text: '731',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        imageUrl:'/images/lol.png',
        text: 'Combien de liens fraternels y a-t-il dans l\'histoire des personnages de League of Legends ?',
        answers: [
          {
            text: '4',
            isCorrect: false,
            selectedByUser: false
          },{
            text: '5',
            isCorrect: false,
            selectedByUser: false
          },{
            text: '6',
            isCorrect: true,
            selectedByUser: false
          },{
            text: '7',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        imageUrl:'/images/nintendo.png',
        text: 'Parmi ces jeux Nintendo, lequel a été le plus vendu ?',
        answers: [
          {
            text: 'Wii Sport',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'Mario Kart Wii',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Wii Sport Resort',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Super Mario Bros',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        imageUrl:'/images/sony.jpg',
        text: 'Pourquoi Sony a créé sa propre console de jeu ?',
        answers: [
          {
            text: 'Pour étendre leur marché',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Grâce à la demande des consommateurs',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Pour tester de nouveaux horizons',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Parce que Nintendo l\'a laché sur sa console',
            isCorrect: true,
            selectedByUser: false
          }

        ]
      }
    ]
  }

  select(answer) {
    answer.selectedByUser = true
  }

  getColor(answer) {    
    const defaultColor = '#387ef5'
    if (!answer.selectedByUser) return defaultColor
    return answer.isCorrect ? 'green' : 'red'
  }

}