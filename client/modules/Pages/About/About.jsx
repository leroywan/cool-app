import React from 'react';
import {connect} from 'react-redux'

import Navigation from '../../App/components/Header/Navigation.jsx';
import Footer from '../../App/components/Footer/Footer.jsx';

import axios from 'axios';
import auth from 'utils/auth';

const mapStateToProps = state => {
  return {
     state
  }
}

class About extends React.Component {

  handleSubmit  = (e) => {
    e.preventDefault();
    axios.get('/api/testRoute').then(
      (res)=> {
        console.log(res.data);
      }
    ).catch(err=>{ 
      console.log(err);
      window.location = "/login";
    })
  }

  render(props) {
    return (
    	<div>
	    	<Navigation></Navigation>
	        <h1>This is the About Page</h1>
           <form  
          method="GET" 
          onSubmit={ (e)=> { this.handleSubmit(e) } }>
            <button type="submit">Test Route</button>
          </form>
	        <Footer></Footer>
        </div>
    );
  }
}



export default connect(
	mapStateToProps
)(About)



