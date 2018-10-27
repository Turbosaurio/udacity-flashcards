export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(val) {
	return{
		type: RECEIVE_USERS,
		val
	}
}