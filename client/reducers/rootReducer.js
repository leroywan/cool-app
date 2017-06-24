import { combineReducers } from 'redux';

import auth from 'reducers/authReducers';
import searchBar from 'reducers/searchBarReducers';

export default combineReducers({
	auth,
	searchBar
})