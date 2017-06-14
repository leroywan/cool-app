export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export function setSearch(text){
	console.log('the action...')
	return {
		type: SET_SEARCH_QUERY,
		searchQuery: text
	}
}