import {
	_getUsers,
	_getDecks,
	_getFlashcards,
} from './APP_DATA'

export function getInitialData () {
	return Promise.all([
		_getUsers(),
		_getDecks(),
		_getFlashcards(),
	]).then(([users, flashcards, decks]) => ({
		users,
		flashcards,
		decks,
	}))
}
