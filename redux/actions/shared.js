import {getInitialData} from '../API'

import {receiveFlashcards} from './flashcards'
import {receiveDecks} from './decks'
import {receiveUsers} from './users'
import {setCurrentUser} from './currentUser'

export function handleInitialData(){
	return dispatch => {
		return getInitialData()
			.then( ({users, flashcards, decks}) => {
				dispatch(receiveFlashcards(flashcards))
				dispatch(receiveDecks(decks))
				dispatch(receiveUsers(users))
				dispatch(setCurrentUser('don_draper'))
			})
	}
}