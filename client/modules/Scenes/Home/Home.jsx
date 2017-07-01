import React from 'react';

import SearchBar from 'App/SearchBar/SearchBar.jsx';

export default class Home extends React.Component {

  render() {

    return (
      <div>
     		<div id="home">
     			<h1>Home Page</h1>
          <SearchBar/>
        </div>
      </div>
    );
  }
}
