import {combineReducers} from 'redux'

import users  from './users'
import flashcards  from './flashcards'
import decks from './decks'
import currentUser from './currentUser'
import initialActions from './initialActions'

export default combineReducers({
	users,
	flashcards,
	decks,
	currentUser,
	initialActions,
})