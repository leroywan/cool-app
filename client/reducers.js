import { combineReducers } from 'redux';

import loginForm from 'reducers/authReducers';
import searchBar from 'reducers/searchBarReducers';

export default combineReducers({
	loginForm,
	searchBar
})