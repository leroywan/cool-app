import { combineReducers } from 'redux';
import { ADD_TOAST } from './App.Actions';

export default function app(state = [], action) {
	switch (action.type) {
		case (ADD_TOAST):
			return { 
				...state, 
				text: action.text
			}

		default:
			return state
	}
}
