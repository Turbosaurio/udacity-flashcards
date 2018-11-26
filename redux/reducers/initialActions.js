import {
	GET_INITIAL_ACTIONS,
	SET_CURRENT_DECK,
	NEXT_FLASHCARD,
	ADD_CORRECT_ANSWER,
	SAVE_LAST_ANSWER,
	RESET_INITIAL_SETTINGS,
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

		case RESET_INITIAL_SETTINGS:
			return{
				...state,
				currentDeck : '',
				lastAnswer: '',
				flashcardIndex : 0,
				correctAnswers : 0,
			}

		case NEXT_FLASHCARD:
			return{
				...state,
				flashcardIndex : state.flashcardIndex + 1
			}

		case ADD_CORRECT_ANSWER:
			return{
				...state,
				correctAnswers: state.correctAnswers + 1
			}
		case SAVE_LAST_ANSWER:
			return{
				...state,
				lastAnswer: action.val
			}
		default: return state
	}
}