import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';


exports.isLoggedIn = () => {
	let token = localStorage.jwtToken;
	
	if (token) {
		let user = jwtDecode(token)._doc;
		if (user.userId && user.password && user.email && user.username) {
			return true
		} else {
			console.log('Token is invalid');
		}
	}
	

	return false
}

exports.addJwtToLocal = (jwtToken) => {
	if (jwtToken) {
		localStorage.setItem('jwtToken', jwtToken);
	} else {
		console.log('No jwtToken found: ' + jwtToken);
		return
	}
	
}

exports.removeJwtFromLocal = () => {
	localStorage.removeItem('jwtToken');
}

exports.getJwtFromLocal =() => {
	return localStorage.getItem('jwtToken');
}

exports.getJwtUser = () => {
	let token = localStorage.getItem('jwtToken');
	if (token === null) {
		toast.error('No token found!', {position: toast.POSITION.TOP_LEFT});
		return 
	} 

	return jwtDecode(token)._doc
}

exports.setAuthorizationHeader = () => {
	axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('jwtToken');
}
