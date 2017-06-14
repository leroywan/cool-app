import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <input id="searchInput" placeholder="Search Stuff Here" onKeyPress={ props.clearInput } onChange={ props.setSearchQuery }></input>
      <button onClick={ props.onSearchSubmit } >Search</button>
      <p>{ props.searchQuery }</p>
      <button onClick={ ()=>{ console.log(props)}  }>Show Props</button>
    </div>
  )
}

export default SearchBar;