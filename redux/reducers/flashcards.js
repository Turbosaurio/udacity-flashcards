import {
	RECEIVE_FLASHCARDS,
} from '../actions/flashcards'

export default function flashcards ( state = {}, action){
	switch(action.type){
		case RECEIVE_FLASHCARDS:
			console.log('reducer flashcards', action)
			return{
					...state,
					...action.val
			}
		default: return state
	}
}