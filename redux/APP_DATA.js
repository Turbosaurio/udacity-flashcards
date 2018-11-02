const flashcards = {
	'74hqpjojd02nyto6ycmom':{
		id:'74hqpjojd02nyto6ycmom',
		name: 'Flashcard 1',
		deck: 'qytmbb13lm602a1blpxy9',
		question:{
			text: 'What is the capital of Germany',
			options:{
				optionA: 'Berlin',
				optionB: 'Munich',
			},
			answer: 'optionA',
		},
	},
	'cj3msnh6znetchi319xad':{
		id:'cj3msnh6znetchi319xad',
		name: 'Flashcard A',
		deck: 'qytmbb13lm602a1blpxy9',
		question:{
			text: 'What is the capital of Mexico',
			options:{
				optionA: 'Mexico City',
				optionB: 'Monterrey',
			},
			answer: 'optionA',
		},
	},
	'an93r0fgbgsp8z8fh8yrh':{
		id:'an93r0fgbgsp8z8fh8yrh',
		name: 'Flashcard 2',
		deck: '3v0zb06ajnt4tlml8yryzy',
		question:{
			text: 'What is the capital of Colombia',
			options:{
				optionA: 'Bogota',
				optionB: 'Medellin',
			},
			answer: 'optionA',
		},
	},
	'bv3c9tshsnk2m15suvf97y':{
		id:'bv3c9tshsnk2m15suvf97y',
		name: 'Flashcard 3',
		deck: 'kvbsr8is9ib44zfvnrl8th',
		question:{
			text: 'What is the capital of Korea',
			options:{
				optionA: 'Busan',
				optionB: 'Seoul',
			},
			answer: 'optionB',
		},
	},
	'35z3oojcgnxp6gg59ujql':{
		id:'35z3oojcgnxp6gg59ujql',
		name: 'Flashcard C',
		deck: 'kvbsr8is9ib44zfvnrl8th',
		question:{
			text: 'What is the capital of Canada',
			options:{
				optionA: 'Ottawa',
				optionB: 'Montreal',
			},
			answer: 'optionA',
		},
	},
}

const decks = {
	'qytmbb13lm602a1blpxy9':{
		id: 'qytmbb13lm602a1blpxy9',
		name: 'Deck 1',
		scores:{
			'1540957285032':{
				score: '1/2'
			},
			'1540957444761':{
				score: '2/2'
			}
		},
	},
	'3v0zb06ajnt4tlml8yryzy':{
		id: '3v0zb06ajnt4tlml8yryzy',
		name: 'Deck 2',
		scores:{
			'1540957378000':{
				score: '0/1'
			}
		},
	},
	'kvbsr8is9ib44zfvnrl8th':{
		id: 'kvbsr8is9ib44zfvnrl8th',
		name: 'Deck 3',
		scores:{
			'1540957409492':{
				scrore: '1/1'
			}
		},
	},
}

const users = {
	don_draper: {
		name: 'Don Draper',
		currentDeck: '74hqpjojd02nyto6ycmom',
		flashcards: ['74hqpjojd02nyto6ycmom'],
	},
	peter_campbell:{
		name: 'Peter Campbell',
		currentDeck: '74hqpjojd02nyto6ycmom',
		flashcards: ['an93r0fgbgsp8z8fh8yrh'],
	},
	roger_sterling:{
		name: 'Roger Sterling',
		currentDeck: '74hqpjojd02nyto6ycmom',
		flashcards: ['bv3c9tshsnk2m15suvf97y'],
	},
}



export function _getUsers(){
	return new Promise((res, rej) => {
		setTimeout(() => res({...users}), 100)
	})
}

export function _getFlashcards(){
	return new Promise((res, rej) => {
		setTimeout(() => res({...flashcards}), 100)
	})
}

export function _getDecks(){
	return new Promise((res, rej) => {
		setTimeout(() => res({...decks}), 100)
	})
}


function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _saveDeck(){

}

export function _saveFlaschard(){
	
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}