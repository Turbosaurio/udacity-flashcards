export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function receiveDecks(val) {
	return{
		type: RECEIVE_DECKS,
		val
	}
}