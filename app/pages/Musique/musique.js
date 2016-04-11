import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/Musique/musique.html'
})
export class Musique {

  constructor() {
    this.questions = [
      {

        text: 'Miroir dit-moi qui est le plus beau ?',
        imageUrl:"/images/willy.jpg",
        answers: [
          {
            text: 'Quitte à devenir rigolo',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Quitte à devenir mégalo',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'Quitte à devenir parano',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Quitte à devenir pyro',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        text: 'Elle dit qu\'il n\'est jamais très loin',
        imageUrl :"/images/stromae.jpg",
        answers: [
          {
            text: 'Qu\'il part très souvent s\'immoler',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Qu\'il part très souvent se cacher',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Qu\'il part très souvent picoler',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Qu\'il part très souvent travailler',
            isCorrect: true,
            selectedByUser: false
          }

        ]
      },{
        text: 'J\'ai pas réglé mes problèmes; les coups, j\'en ai fait',
        imageUrl:"/images/youssoupha.jpg",
        answers: [
          {
            text: 'Quatre cent',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'Deux cent',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Sept cent',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Cinq cent',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        text: 'A m\'asseoir sur un banc cinq minutes avec toi',
        imageUrl:"/images/renaud.jpg",
        answers: [
          {
            text: 'Et regarder les gens danser',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Et regarder les gens parler',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Et regarder les gens tant qu\'y en a',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'Et regarder les gens pleurer',
            isCorrect: false,
            selectedByUser: false
          }

        ]
      },{
        text: 'C\'est la crise oh la la la',
        imageUrl:"/images/ridsa.jpg",
        answers: [
          {
            text: 'French kiss oh la la la',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Ça va vite oh la la la',
            isCorrect: true,
            selectedByUser: false
          },{
            text: 'J\'fais la diff\' oh la la la',
            isCorrect: false,
            selectedByUser: false
          },{
            text: 'Ah tu m\'kiff oh la la la',
            isCorrect: false,
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