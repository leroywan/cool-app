export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export function setSearch(text){
	return {
		type: SET_SEARCH_QUERY,
		searchQuery: text
	}
}