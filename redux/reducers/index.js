import {combineReducers} from 'redux'

import users  from './users'
import flashcards  from './flashcards'
import decks from './decks'

export default combineReducers({
	users,
	flashcards,
	decks,
})