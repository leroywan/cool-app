import { combineReducers } from 'redux';
import { SET_SEARCH_QUERY } from './App.Actions';

export default function app(state = [], action) {
	console.log('in the reducer...')

	switch (action.type) {
		case (SET_SEARCH_QUERY):
			console.log('SETTING search query...');
			return {
				...state, 
				searchQuery: action.searchQuery
			}

		default:
			console.log('default action...')
			return state
	}
}
