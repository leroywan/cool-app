import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';

const setAuthorizationHeader = () => {
	axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('jwtToken');
}

const addJwtToLocal = (jwtToken) => {
	if (jwtToken) {
		localStorage.setItem('jwtToken', jwtToken);
	} else {
		console.log('No jwtToken found: ' + jwtToken);
		return
	}
}

const isAuthenticated = () => {
	let token = localStorage.getItem('jwtToken');
	if (token) {
		let user = jwtDecode(token)._doc;
		console.log(user);
		if (user.username && user.userId && user.password && user.email) {
			return true
		}
		return false
	} else {
		return false
	}
}

const removeJwtFromLocal = () => {
	localStorage.removeItem('jwtToken');
}

const getJwtFromLocal = () => {
	return localStorage.getItem('jwtToken');
}

const getJwtUser = () => {
	let token = localStorage.getItem('jwtToken');
	if (token === null) {
		return 
	} 
	return jwtDecode(token)._doc
}

const refreshJwt = () => {
  let user = jwtDecode(getJwtFromLocal())._doc;
  axios.post('/api/refreshJwt', user).then( res => {
    addJwtToLocal(res.data.token);
    setAuthorizationHeader();
  })
}



module.exports = {
	// check user authentication by jwt token
	isAuthenticated: isAuthenticated,

	addJwtToLocal: addJwtToLocal,

	removeJwtFromLocal: removeJwtFromLocal,

	getJwtFromLocal: getJwtFromLocal,

	getJwtUser: getJwtUser,

	refreshJwt: refreshJwt,

	setAuthorizationHeader: setAuthorizationHeader,

}

