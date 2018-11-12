import {
	GET_INITIAL_ACTIONS,
	SET_CURRENT_DECK,
	SET_CURRENT_FLASHCARD,
	NEXT_FLASHCARD,
	RESET_INITIAL_SETTINGS, initialSettings
} from '../actions/initialActions'

export default function initialActions ( state = {}, action){
	switch(action.type){

		case GET_INITIAL_ACTIONS:
			return{
				...state,
				...action.val
			}

		case SET_CURRENT_DECK:
			return{
				...state,
				currentDeck: action.val
			}

		case SET_CURRENT_FLASHCARD:
			return{
				...state,
				currentFlashcard: action.val
			}

		case RESET_INITIAL_SETTINGS:
			return{
				...state,
				...initialSettings
			}

		case NEXT_FLASHCARD:
			return{
				...state,
				...action.val,
			}

		default: return state
	}
}