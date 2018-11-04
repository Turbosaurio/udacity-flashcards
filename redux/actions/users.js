export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SET_USER_PROP = 'SET_USER_PROP'

export function receiveUsers(val) {
	return{
		type: RECEIVE_USERS,
		val
	}
}

export function setUserProp (val){
	return{
		type: SET_USER_PROP,
		val
	}
}