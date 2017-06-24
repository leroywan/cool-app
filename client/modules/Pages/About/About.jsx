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

  render(props) {

    console.log(props);
    
    return (
    	<div>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
	        <p>Hi User { this.props.match.params.userId }</p>
	        <Footer></Footer>
        </div>
    );
  }
}



export default connect(
	mapStateToProps
)(About)