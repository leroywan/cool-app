 import React from 'react';
import {connect} from 'react-redux'

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';


const mapStateToProps = state => {
  return {
     searchQuery: state.app.searchQuery
  }
}

class About extends React.Component {

  render() {

    return (
    	<div>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
	        <p>{ this.props.searchQuery }</p>
	        <Footer></Footer>
        </div>
    );
  }
}



export default connect(
	mapStateToProps
)(About)