import {getInitialData} from '../API'

import {receiveFlashcards} from './flashcards'
import {receiveDecks} from './decks'
import {receiveUsers} from './users'
import {setCurrentUser} from './currentUser'
import {getInitialActions} from './initialActions'

const current_user = 'don_draper'

export const initialSettings = {
	currentDeck : '',
	currentFlashcard : '',
	userAnswer: '',
	flashcardIndex : 0,
	correctAnswers : 0,
}

export function handleInitialData(){
	return dispatch => {
		return getInitialData()
			.then( ({users, flashcards, decks}) => {
				dispatch(receiveFlashcards(flashcards))
				dispatch(receiveDecks(decks))
				dispatch(receiveUsers(users))
				dispatch(getInitialActions(initialSettings))
				dispatch(setCurrentUser(current_user))
			})
	}
}