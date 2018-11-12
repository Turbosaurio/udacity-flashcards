import {
	GET_INITIAL_ACTIONS,
	SET_CURRENT_DECK,
	SET_CURRENT_FLASHCARD,
	NEXT_FLASHCARD,
	ADD_CORRECT_ANSWER,
	ADD_USER_ANSWER,
	RESET_INITIAL_SETTINGS, initialSettings
} from '../actions/initialActions'

export default function initialActions ( state = {}, action){
	switch(action.type){
		case GET_INITIAL_ACTIONS:
			return{
				...state,
				...action.val
			}
		case ADD_USER_ANSWER:
			return{
				...state,
				currentAnswer: action.val
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
		case NEXT_FLASHCARD:
			return{
				...state,
				flashcardIndex : state.flashcardIndex + 1
			}
		case ADD_CORRECT_ANSWER:
			return{
				...state,
				correctAnswer : state.correctAnswer + 1
			}
		case RESET_INITIAL_SETTINGS:
			return{
				...state,
				...initialSettings
			}
		default: return state
	}
}