import { combineReducers } from 'redux';
import { REQUEST_LOGIN, RECEIVE_USER_INFO, LOGIN_SUCCESS, AUTH_SUCCESS, AUTH_FAIL, LOGOUT_SUCCESS } from 'actions/userActions';

const initialState = {
	isAuthenticated: false,
	isAuthenticating: false,
}

export default function auth(state = [], action) {

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
				isFetching: action.isFetching,
			}

		case (LOGIN_SUCCESS):
			return {
				...state,
				isAuthenticating: action.isAuthenticating,
				isAuthenticated: action.isAuthenticated,
				isLoggedIn: action.isLoggedIn,
				loggedInAt: action.loggedInAt,
			}

		case (AUTH_SUCCESS):
			return {
				...state, 
				isAuthenticating: action.isAuthenticating,
				isLoggedIn: action.isLoggedIn,
				isAuthenticated: action.isAuthenticated
			}

		case (AUTH_FAIL):
			return {
				...state,
				isAuthenticating: action.isAuthenticating,
				isLoggedIn: action.isLoggedIn,
				isAuthenticated: action.isAuthenticated,
			}

		case (LOGOUT_SUCCESS):
			return {
				isAuthenticating: action.isAuthenticating,
				isLoggedIn: action.isLoggedIn,
				isAuthenticated: action.isAuthenticated,
			}

		default:
			return state
	}
}
