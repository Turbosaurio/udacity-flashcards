import {
	RECEIVE_FLASHCARDS,
} from '../actions/flashcards'

export default function flashcards ( state = {}, action){
	switch(action.type){
		case RECEIVE_FLASHCARDS:
			return{
					...state,
					...action.val
			}
		default: return state
	}
}