import React from 'react';

const SearchResults = (props) => (
	<div>
		<h1>This is the search results!</h1>
		<p>Results: { props.match.params.searchQuery }</p>
	</div>
)

export default SearchResults