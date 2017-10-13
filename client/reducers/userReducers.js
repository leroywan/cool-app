/******************************************************************************************

All user related reducers (Authentication, user profile...). 

*******************************************************************************************/


import { combineReducers } from 'redux';
import { 
	REQUEST_LOGIN, 
	LOGIN_SUCCESS, 
	AUTH_SUCCESS, 
	AUTH_FAIL, 
	LOGOUT_SUCCESS,
	FETCHING_USER, 
	FETCH_USER_SUCCESS,
	FETCH_USER_FAIL,
	REQUEST_EDIT_PROFILE_PIC,
	EDIT_PROFILE_PIC_SUCCESS,
	EDIT_PROFILE_PIC_FAIL,
} from 'actions/userActions';

const initialState = {
	isFetching: false,
	isLoggedIn: false,
	loggedInAt: null,
	info: {
		data: null,
		loading: true,
		error: null,
	},
	picUrl: null,
}

export default function user(state = initialState, action) {

	switch (action.type) {

		case (FETCHING_USER):
			return {
				...state,
				info: {
					data: null,
					loading: true,
					error: null,
				}
			}

		case (FETCH_USER_SUCCESS):
			return {
				...state,
				info: {
					data: action.payload,
					loading: false,
					error: null,
				},
				picUrl: action.payload.profile.picUrl
			}

		case (FETCH_USER_FAIL):
			let error = action.payload.message
			return {
				...state,
				info: {
					data:action.payload,
					loading: false,
					error: error, 
				}
			}

		case (AUTH_SUCCESS):
			return {
				...state, 
				isLoggedIn: action.isLoggedIn,
			}

		case (AUTH_FAIL):
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			}

		case (REQUEST_LOGIN):
			return {
				...state, 
			}

		case (LOGIN_SUCCESS):
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
				loggedInAt: action.loggedInAt,
			}

		case (LOGOUT_SUCCESS):
			return {
				...state,
				isLoggedIn: action.isLoggedIn,
			}

		case (REQUEST_EDIT_PROFILE_PIC): 
			return {
				...state,
				isFetching: true,
			}

		case (EDIT_PROFILE_PIC_SUCCESS): 
			return {
				...state,
				picUrl: action.picUrl,
				isFetching: action.isFetching,
			}
		case (EDIT_PROFILE_PIC_FAIL): 
			return {
				...state,
				isFetching: false,
			}

		default:
			return state
	}
}
