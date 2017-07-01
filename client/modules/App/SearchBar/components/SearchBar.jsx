import React from 'react';

class SearchBar extends React.Component { 

	state = {
		searchQuery: null
	}

	handleOnChange = (e) => {
		this.setState({ searchQuery: e.target.value });
	}

	handleOnKeyPress = (e) => {
		if (e.key == 'Enter') {
			console.log('Enter is pressed!');
			this.props.handleSubmit(this.state.searchQuery);
		}
	}

	render() {
		return (
			<div>
	      <input id="searchInput" placeholder="Search Stuff Here" onKeyPress={ (e)=>{ this.handleOnKeyPress(e) } } onChange={ (e)=> { this.handleOnChange(e) } } ></input>
	      <button onClick={ () => { this.props.handleSubmit(this.state.searchQuery) } }>Search</button>
	    </div>
		)
	}

}

export default SearchBar;