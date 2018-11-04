export const RECEIVE_FLASHCARDS = 'RECEIVE_FLASHCARDS'
export const ADD_FLASHCARD = 'ADD_FLASHCARD'

export function receiveFlashcards(val) {
	return{
		type: RECEIVE_FLASHCARDS,
		val
	}
}

export function addFlashcard(val){
	return{
		type: ADD_FLASHCARD,
		val
	}
}