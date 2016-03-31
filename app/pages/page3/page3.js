import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {

	constructor() {
		this.questions = [
			{
				
				text: 'Avec combien de joueurs se joue le Football (par équipe) ?',
				answers: [
					{
						text: '11',
						isCorrect: true,
						selectedByUser: false
					},{
						text: '5',
						isCorrect: false,
						selectedByUser: false
					},{
						text: '15',
						isCorrect: false,
						selectedByUser: false
					},{
						text: '9',
						isCorrect: false,
						selectedByUser: false
					}

				]
			},{
				text: 'Avec combien de joueurs se joue le BasketBall (par équipe et sur le terrain) ?',
				answers: [
					{
						text: '5',
						isCorrect: true,
						selectedByUser: false
					},{
						text: '11',
						isCorrect: false,
						selectedByUser: false
					},{
						text: '22',
						isCorrect: false,
						selectedByUser: false
					},{
						text: '3',
						isCorrect: false,
						selectedByUser: false
					}

				]
			},{
				text: 'Quel est ce sport ?',
				answers: [
					{
						text: 'Football Américain',
						isCorrect: true,
						selectedByUser: false
					},{
						text: 'Danse',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Cyclisme',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Football',
						isCorrect: false,
						selectedByUser: false
					}

				]
			},{
				text: 'Qui détient le record de titres majeurs?',
				answers: [
					{
						text: 'Ken Rosewall',
						isCorrect: true,
						selectedByUser: false
					},{
						text: 'Gael Monfils',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Roger Federer',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Novak Djokovic',
						isCorrect: false,
						selectedByUser: false
					}

				]
			},{
				text: 'Comment appelle-t-on l\'équipe de France de Handball ?',
				answers: [
					{
						text: 'Les experts',
						isCorrect: true,
						selectedByUser: false
					},{
						text: 'Les bourrés',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Les Geeks',
						isCorrect: false,
						selectedByUser: false
					},{
						text: 'Les Barjots',
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
		console.log(answer)
		const defaultColor = '#387ef5'
		if (!answer.selectedByUser) return defaultColor
		return answer.isCorrect ? 'green' : 'red'
	}

}
