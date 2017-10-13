/******************************************************************************************

All user related actions (Authentication, user profile...). 

*******************************************************************************************/

import axios from 'axios';
import auth from 'utils/auth';
import { toast } from 'react-toastify';



// ================================================================================
// AUTHENTICATION
// ================================================================================

export const 	REQUEST_LOGIN = 'REQUEST_LOGIN';
export function requestLogin(){
	return {
		type: REQUEST_LOGIN,
	}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess() {
	return {
		type: LOGIN_SUCCESS,
		loggedInAt: Date.now(),
		isLoggedIn: true,
	}
}

export const AUTH_JWT = 'AUTH_JWT';
export function authJwt() {
	return {
		type: AUTH_JWT,
	}
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess() {
	return {
		type: AUTH_SUCCESS,
		isLoggedIn: true,
	}
}

export const AUTH_FAIL = 'AUTH_FAIL';
export function authFail() {
	return {
		type: AUTH_FAIL,
		isLoggedIn: false,
	}
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function logoutSuccess() {
	return {
		type: LOGOUT_SUCCESS,
		isLoggedIn: false,
	}
}

export const FETCHING_USER = 'FETCHING_USER';
export function fetchingUser() {
	return {
		type: FETCHING_USER,
		fetching: true,
	}
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export function fetchUserSuccess(payload) {
	return {
		type: FETCH_USER_SUCCESS,
		payload: payload
	}
}

export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export function fetchUserFail(err) {
	return {
		type: FETCH_USER_FAIL,
		payload: err
	}
}

export function fetchUser(userId) {
	return (dispatch) => {
		dispatch(fetchingUser());
		return axios.get('/api/getUserProfile?userId=' + userId).then( (res)=>{
			if (res.data.success) {
				dispatch(fetchUserSuccess(res.data.payload));
			} else {
				dispatch(fetchUserFail(res.data.message))
			}
		})
	}
}

export function authenticateJwt() {
	return (dispatch) => {
		dispatch(authJwt());
		return axios.post('/api/authenticateJwt', { token: auth.getJwtFromLocal() }).then(
			(res) => {
				if (res.data.success) {
					// once authenticated, refresh the jwt token in local storage
					auth.addJwtToLocal(res.data.token);
					dispatch(authSuccess());
				} else {
					auth.removeJwtFromLocal();
					dispatch(authFail());
				}
			}
		)
	}
}

export function authenticateUser(email, password) {
	return (dispatch) => {
		dispatch(requestLogin(email, password));
		return axios.post('/api/authenticate', { email: email, password: password }).then(
			(res) => {
        if (res.data.success) {
        	const token = res.data.token;
          auth.addJwtToLocal(token);
          dispatch(loginSuccess());
          dispatch(fetchUser(auth.getJwtUser().userId));
          toast('Welcome Back!', { position: toast.POSITION.BOTTOM_RIGHT });
        } else {
          toast.error(res.data.message);
        }
      } 
		)
	}
}


// ================================================================================
// USER PROFILE
// ================================================================================

export const REQUEST_EDIT_PROFILE_PIC = 'REQUEST_EDIT_PROFILE_PIC';
export function requestEditProfilePic() {
	return {
		type: REQUEST_EDIT_PROFILE_PIC,
		isFetching: true,
	}
}

export const EDIT_PROFILE_PIC_SUCCESS = 'EDIT_PROFILE_PIC_SUCCESS';
export function editProfilePicSuccess(url) {
	return {
		type: EDIT_PROFILE_PIC_SUCCESS,
		picUrl: url,
		isFetching: false,
	}
}

export const EDIT_PROFILE_PIC_FAIL = 'EDIT_PROFILE_PIC_FAIL';
export function editProfilePicFail() {
	return {
		type: EDIT_PROFILE_PIC_FAIL,
		isFetching: false,
	}
}

export function editUserProfilePic(url) {
	return (dispatch) => {
		dispatch(requestEditProfilePic());

		return axios.put('/api/editUserProfilePic', { picUrl: url, userId: auth.getJwtUser().userId }).then(((res)=>{
			if (res.data.success) {
				dispatch(editProfilePicSuccess(res.data.picUrl));
				dispatch(fetchUser(auth.getJwtUser().userId));
				toast(res.data.message);
			} else {
				dispatch(editProfilePicSuccessFail());
				toast.error(res.data.message);
			}
		}))
	}
}