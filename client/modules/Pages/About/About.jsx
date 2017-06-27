import React from 'react';
import {connect} from 'react-redux'

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';


const mapStateToProps = state => {
  return {
     state
  }
}

class About extends React.Component {

  render(props) {

    
    return (
    	<div>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
	        <Footer></Footer>
        </div>
    );
  }
}



export default connect(
	mapStateToProps
)(About)



