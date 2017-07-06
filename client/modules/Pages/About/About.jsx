import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import auth from 'utils/auth';

const mapStateToProps = (state, ownProps) => {
  return {
     state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      axios.get('/api/testRoute').then(
        (res)=> {
          console.log(res.data);
        }
      ).catch(err=>{ 
        console.log(err);
        ownProps.history.push("/login");
      })
    }
  }
}

const About = (props) => {
  return (
    <div>
      <h1>This is the About Page</h1>
       <form  
      method="GET" 
      onSubmit={ (e)=> { props.handleSubmit(e) } }>
        <button type="submit">Test Route</button>
      </form>
    </div>
  );
}

export default withRouter(connect(
	mapStateToProps,
  mapDispatchToProps,
)(About));



