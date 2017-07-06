import axios from 'axios';
import auth from 'utils/auth';
import { toast } from 'react-toastify';

export const 	REQUEST_LOGIN = 'REQUEST_LOGIN';
export function requestLogin(){
	return {
		type: REQUEST_LOGIN,
		isFetching: true
	}
}

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export function receiveUserInfo(user) {
	return {
		type: RECEIVE_USER_INFO,
		userInfo: user,
		isFetching: false,
	}
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess() {
	return {
		type: LOGIN_SUCCESS,
		isAuthenticating: false,
		isLoggedIn: true,
		isAuthenticated: true,
		loggedInAt: Date.now(),
	}
}

export const AUTH_JWT = 'AUTH_JWT';
export function authJwt() {
	return {
		type: AUTH_JWT,
		isAuthenticating: true,
	}
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export function authSuccess() {
	return {
		type: AUTH_SUCCESS,
		isAuthenticating: false,
		isLoggedIn: true,
		isAuthenticated: true,
	}
}

export const AUTH_FAIL = 'AUTH_FAIL';
export function authFail() {
	return {
		type: AUTH_FAIL,
		isAuthenticating: false,
		isLoggedIn: false,
		isAuthenticated: false,
	}
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export function logoutSuccess() {
	return {
		type: LOGOUT_SUCCESS,
		isAuthenticating: false,
		isLoggedIn: false,
		isAuthenticated: false,
	}
}

export function authenticateUser(email, password, callback = () => {}) {
	return (dispatch) => {
		dispatch(requestLogin(email, password));
		return axios.post('/api/authenticate', { email: email, password: password }).then(
			(res) => {
        if (res.data.success) {
        	const token = res.data.token;
          auth.addJwtToLocal(token);
          dispatch(receiveUserInfo(auth.getJwtUser()));
          dispatch(loginSuccess());
          callback();
        } else {
          toast.error(res.data.message);
        }
      } 
		)
	}
}