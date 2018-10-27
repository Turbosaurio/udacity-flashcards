export const RECEIVE_FLASHCARDS = 'RECEIVE_FLASHCARDS'

export function receiveFlashcards(val) {
	return{
		type: RECEIVE_FLASHCARDS,
		val
	}
}