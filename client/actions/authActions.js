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
		isLoggedIn: true,
		isFetching: false,
		loggedInAt: Date.now()
	}
}

export function authenticateUser(email, password) {
	return (dispatch) => {
		dispatch(requestLogin(email, password));
		return axios.post('/api/authenticate', { email: email, password: password }).then(
			(res) => {
				console.log('getting a response');
        if (res.data.success) {
        	const token = res.data.token;
          auth.addJwtToLocal(token);
          dispatch(receiveUserInfo(auth.getJwtUser(token)));
          toast.success('Successfully signed in!');
        } else {
          toast.error(res.data.message);
        }
      } 
		)
	}
}