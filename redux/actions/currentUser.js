export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export function setCurrentUser(val) {
	return{
		type: SET_CURRENT_USER,
		val
	}
}