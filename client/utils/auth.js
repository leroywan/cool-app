import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';

const setAuthorizationHeader = () => {
	axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('jwtToken');
}

const removeAuthorizationHeader = () => {
	axios.defaults.headers.common['Authorization'] = '';
}

const jwtExists = () => {
	let token = localStorage.getItem('jwtToken');
	if (token === null) { 
		return false
	} else {
		return true
	}
}

const jwtExpired = () => {
	const jwt = jwtDecode(localStorage.getItem('jwtToken'));
	if (jwt.exp < Date.now() / 1000) {
	  return true
	} else {
		return false
	}
}

const addJwtToLocal = (jwtToken) => {
	if (jwtToken) {
		localStorage.setItem('jwtToken', jwtToken);
		setAuthorizationHeader();
	} else {
		console.log('No jwtToken found: ' + jwtToken);
		return
	}
}

const isAuthenticated = () => {
	let token = localStorage.getItem('jwtToken');
	if (token) {
		let user = jwtDecode(token)._doc;
		if (user.username && user.userId && user.password && user.email) {
			return true
		}
		console.log('token cannot be authenticated')
		return false
	} else {
		console.log('token cannot be authenticated')
		return false
	}
}

const removeJwtFromLocal = () => {
	localStorage.removeItem('jwtToken');
}

const getJwtFromLocal = () => {
	let token = localStorage.getItem('jwtToken');
	if (token === null) {
		console.log('No token found');
		return 
	}
	return token
}

const getJwtDecode = () => {
	let token = localStorage.getItem('jwtToken');
	if (token === null) {
		console.log('No token found')
		return 
	} 
	return jwtDecode(token)
}

const getJwtUser = () => {
	return getJwtDecode()._doc
}



module.exports = {
	// check user authentication by jwt token
	jwtExists: jwtExists, 

	isAuthenticated: isAuthenticated,

	addJwtToLocal: addJwtToLocal,

	removeJwtFromLocal: removeJwtFromLocal,

	getJwtFromLocal: getJwtFromLocal,

	getJwtDecode: getJwtDecode,

	getJwtUser: getJwtUser,

	setAuthorizationHeader: setAuthorizationHeader,

	removeAuthorizationHeader: removeAuthorizationHeader

}

