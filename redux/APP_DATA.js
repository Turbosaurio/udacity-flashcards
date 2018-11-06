const flashcards = {
	'74hqpjojd02nyto6ycmom':{
		id:'74hqpjojd02nyto6ycmom',
		name: 'Flashcard 1',
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
		question:{
			text: 'Gris work was',
			options:{
				optionA: 'Expresionist',
				optionB: 'Cubist',
			},
			answer: 'optionA',
		},
	},
	'bv3c9tshsnk2m15suvf97y':{
		id:'bv3c9tshsnk2m15suvf97y',
		name: 'Flashcard 3',
		question:{
			text: 'Goya was',
			options:{
				optionA: 'Portuguese',
				optionB: 'Spanish',
			},
			answer: 'optionB',
		},
	},
	'35z3oojcgnxp6gg59ujql':{
		id:'35z3oojcgnxp6gg59ujql',
		name: 'Flashcard C',
		question:{
			text: 'What is a Herd',
			options:{
				optionA: 'A bunch of animals or people',
				optionB: 'Something where you cook',
				optionC: 'I have already Herd you!',
			},
			answer: 'optionA',
		},
	},
}

const decks = {
	'qytmbb13lm602a1blpxy9':{
		id: 'qytmbb13lm602a1blpxy9',
		category: 'Geography',
		flashcards: [
			'74hqpjojd02nyto6ycmom',
			'cj3msnh6znetchi319xad',
		],
	},
	'3v0zb06ajnt4tlml8yryzy':{
		id: '3v0zb06ajnt4tlml8yryzy',
		category: 'Art',
		flashcards: [
			'an93r0fgbgsp8z8fh8yrh',
			'bv3c9tshsnk2m15suvf97y',
		],
	},
	'kvbsr8is9ib44zfvnrl8th':{
		id: 'kvbsr8is9ib44zfvnrl8th',
		category: 'German',
		flashcards: [
			'35z3oojcgnxp6gg59ujql',
		],
	},
}

const users = {
	don_draper: {
		name: 'Don Draper',
		score:{
			'qytmbb13lm602a1blpxy9':{
				timestamp: '1540957285032',
				total: 2,
				correct: 1,
			}
		},
	},
	peter_campbell:{
		name: 'Peter Campbell',
		score: '',
	},
	roger_sterling:{
		name: 'Roger Sterling',
		score: '',
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

export function formatFlashcard(data){
	const id = generateUID()
	const {name, text, options, answer, category} = data
	return {
		[id] : {
			id,
			name,
			answer,
			category,
			question: {
				text, options
			},
		}
	}
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