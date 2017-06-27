import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { toast } from 'react-toastify';

module.exports = {
	isAuthenticated: () => {
		let token = localStorage.jwtToken;
		if (token) {
			let user = jwtDecode(token)._doc;
			if (user.username && user.userId && user.password && user.email) {
				return true
			}
			return false
		} else {
			return false
		}
	},

	addJwtToLocal: (jwtToken) => {
		if (jwtToken) {
			localStorage.setItem('jwtToken', jwtToken);
		} else {
			console.log('No jwtToken found: ' + jwtToken);
			return
		}
	},

	signOut: (callback=()=>{}) => {
		localStorage.removeItem('jwtToken');
		callback();
	},

	getJwtFromLocal: () => {
		return localStorage.getItem('jwtToken');
	},

	getJwtUser: () => {
		let token = localStorage.getItem('jwtToken');
		if (token === null) {
			return 
		} 
		return jwtDecode(token)._doc
	},

	setAuthorizationHeader: () => {
		axios.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('jwtToken');
	},

}

