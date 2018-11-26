export const GET_INITIAL_ACTIONS = 'GET_INITIAL_ACTIONS'
export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER'
export const SET_CURRENT_DECK = 'SET_CURRENT_DECK'
export const NEXT_FLASHCARD = 'NEXT_FLASHCARD'
export const RESET_INITIAL_SETTINGS = 'RESET_INITIAL_SETTINGS'
export const SAVE_LAST_ANSWER = "SAVE_LAST_ANSWER"


export function getInitialActions (val){
	return {
		type: GET_INITIAL_ACTIONS,
		val
	}
}

export function setCurrentDeck(val){
	return{
		type:SET_CURRENT_DECK,
		val
	}
}


export function addCorrectAnswer(val){
	return{
		type: ADD_CORRECT_ANSWER,
		val
	}
}

export function goNextFlashcard(){
	return{
		type: NEXT_FLASHCARD,
	}
}
export function resetInitialSettings(){
	return {
		type: RESET_INITIAL_SETTINGS,
	}
}

export function saveLastAnswer(val){
	return{
		type: SAVE_LAST_ANSWER,
		val
	}
}

