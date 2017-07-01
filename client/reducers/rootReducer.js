import { combineReducers } from 'redux';

import user from 'reducers/userReducers';
import searchBar from 'reducers/searchBarReducers';

export default combineReducers({
	user,
	searchBar
})