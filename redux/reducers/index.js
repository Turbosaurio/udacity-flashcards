import {combineReducers} from 'redux'

import users  from './users'
import flashcards  from './flashcards'
import decks from './decks'
import currentUser from './currentUser'

export default combineReducers({
	users,
	flashcards,
	decks,
	currentUser,
})