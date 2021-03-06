import { CHANGE_NAME, CHANGE_IS_ONLINE, CHANGE_IS_AUTHED } from '../actions/profile';

const initialState = {
	name: 'Вадим',
	age: 29,
	isOnline: true,
	isAuthed: false,
}

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME: {
			return {
				...state,
				name: action.payload.name,
			}
		}
		case CHANGE_IS_ONLINE: {
			return {
				...state,
				isOnline: action.payload.isOnline
			}
		}
		case CHANGE_IS_AUTHED: {
			return {
				...state,
				isAuthed: action.payload.isAuthed
			}
		}
		default:
			return state
	}
}
