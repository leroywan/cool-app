import React from 'react';

import Navigation from '../../layouts/Header/Navigation.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';

export default class About extends React.Component {
  render() {
    return (
    	<div style={{textAlign: 'center'}}>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
	        <Footer></Footer>
        </div>
    );
  }
}