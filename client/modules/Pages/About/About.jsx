import React from 'react';

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default class About extends React.Component {
  render() {
    return (
    	<div>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
	        <Footer></Footer>
        </div>
    );
  }
}