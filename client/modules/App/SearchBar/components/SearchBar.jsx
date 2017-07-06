import React from 'react';


class SearchBar extends React.Component { 

	state = {
		searchQuery: null,
		locationPicked: 'toronto',
	}

	handleSearchQueryChange = (e) => {
		this.setState({ searchQuery: e.target.value });
	}

	handleLocationChange = (e) => {
		this.setState({ locationPicked: e.target.value })
	}

	handleOnKeyPress = (e) => {
		if (e.key == 'Enter') {
			this.props.handleSubmit(this.state.searchQuery, this.state.locationPicked);
		}
	}

	render() {

		let logChange = (val)=> {
			console.log(val)
		}
		return (
			<div>
	      <input id="searchInput" placeholder="Search Stuff Here" onKeyPress={ (e)=>{ this.handleOnKeyPress(e) } } onChange={ (e)=> { this.handleSearchQueryChange(e) } } ></input>
	      <select onChange={ (e)=>{this.handleLocationChange(e)} } >
	      	<option value="toronto">Toronto</option>
				  <option value="vancouver">Vancouver</option>
				  <option value="ottawa">Ottawa</option>
	      </select>
	      <button onClick={ ()=>{ this.props.handleSubmit(this.state.searchQuery, this.state.locationPicked) } }>Search</button>
	    </div>
		)
	}

}

export default SearchBar;