export const GET_INITIAL_ACTIONS = 'GET_INITIAL_ACTIONS'
export const NEXT_FLASHCARD = 'NEXT_FLASHCARD'
export const RESET_INITIAL_SETTINGS = 'RESET_INITIAL_SETTINGS'
export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER'

export function getInitialActions (val){
	return {
		type: GET_INITIAL_ACTIONS,
		val
	}
}

export function goNextFlashcard(val){
	return{
		type: NEXT_FLASHCARD,
		val
	}
}
export function resetInitialSettings(){
	return {
		type: RESET_INITIAL_SETTINGS,
	}
}

export function addCorrectAnswer(){
	return{
		type: ADD_CORRECT_ANSWER,
	}
}