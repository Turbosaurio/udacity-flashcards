import {
	RECEIVE_USERS,
	SET_USER_PROP
} from '../actions/users'

export default function users ( state = {}, action){
	switch(action.type){
		case RECEIVE_USERS:
			return{
				...state,
				...action.val
			}
		case SET_USER_PROP:
			return{
				...state,
				[action.val.user] : {
					...state[action.val.user],
					[action.val.key] : action.val.value
				}
			}
		default: return state
	}
}