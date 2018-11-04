import {
	RECEIVE_FLASHCARDS,
	ADD_FLASHCARD,
} from '../actions/flashcards'

export default function flashcards ( state = {}, action){
	switch(action.type){
		case RECEIVE_FLASHCARDS:
			return{
				...state,
				...action.val
			}
		case ADD_FLASHCARD:
			return{
				...state,
				...action.val
			}
		default: return state
	}
}