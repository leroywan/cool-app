import React from 'react';
import queryString from 'query-string';
import axios from 'axios';

import SearchResult from './components/SearchResult.jsx';

export default class SearchResults extends React.Component {

	state = {
		searchResults: null,
		searchQuery: null,
		searchLocation: null,
	}

	componentWillMount() {
		let search = queryString.parse(window.location.search);
		this.setState({
			searchQuery: search.q, 
			searchLocation: search.location
		})
	}

	componentDidMount() {
		axios.get('/api/search/' + window.location.search ).then((res)=>{
			this.setState({ searchResults: res.data.payload });
		});
	}

	render() {
		const listItems = this.state.searchResults ? 

			this.state.searchResults.map((result) => {
				return <li key={ result._id }><SearchResult searchResult={result} /></li>
			}) 

			: 
	
			<p>LOADING...</p>;
		return (
			<div>
				<h1>Search Results For: "{ this.state.searchQuery }" near "{ this.state.searchLocation }"</h1>
				<ul>{listItems}</ul>
			</div>
		)
	}
}
