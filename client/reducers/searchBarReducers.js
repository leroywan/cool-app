import { combineReducers } from 'redux';
import { SET_SEARCH_QUERY } from 'actions/searchBarActions';

export default function searchBar(state = [], action) {
	switch (action.type) {
		case (SET_SEARCH_QUERY):
			return {
				...state, 
				searchQuery: action.searchQuery
			}

		default:
			return state
	}
}
