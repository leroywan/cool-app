import React from 'react';

const SearchResult = (props) => (
	<div>
		<img src='/assets/images/placeholder.png'/>
		<h3>{props.searchResult.generalInfo.displayName}</h3>
		<p>Location: {props.searchResult.generalInfo.city}</p>
	</div>
)

export default SearchResult