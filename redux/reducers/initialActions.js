import {
	GET_INITIAL_ACTIONS,
	NEXT_FLASHCARD,
	ADD_CORRECT_ANSWER,
	RESET_INITIAL_SETTINGS,
} from '../actions/initialActions'

export default function initialActions ( state = {}, action){
	switch(action.type){
		case GET_INITIAL_ACTIONS:
			return{
				...state,
				...action.val
			}
		case NEXT_FLASHCARD:
			return{
				...state,
				f: action.val
			}
		case ADD_CORRECT_ANSWER:
			return{
				...state,
				a: state.a + 1
			}
		case RESET_INITIAL_SETTINGS:
			return{
				...state,
				a: 0,
				f: 0,
			}
		default: return state
	}
}