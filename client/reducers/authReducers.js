import { combineReducers } from 'redux';
import { REQUEST_LOGIN, RECEIVE_USER_INFO } from 'actions/authActions';

export default function loginForm(state = [], action) {

	switch (action.type) {
		case (REQUEST_LOGIN):

			return {
				...state, 
				isFetching: action.isFetching,
			}

		case (RECEIVE_USER_INFO):
			return {
				...state,
				userInfo: action.userInfo,
				isLoggedIn: action.isLoggedIn,
				loggedInAt: action.loggedInAt,
				isFetching: action.isFetching,

			}

		default:
			return state
	}
}
