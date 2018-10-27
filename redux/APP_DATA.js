const flashcards ={
	flashcard: "flashcard 1"
}
const decks = {
	decks: ['deck1', 'deck2', 'deck3', 'deck4']
}
const users = {
	users: ['user1', 'user2', 'user3']
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
