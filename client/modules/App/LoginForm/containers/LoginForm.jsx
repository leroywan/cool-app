import React from 'react';
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import auth from 'utils/auth';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import { authenticateUser } from 'actions/userActions';

import LoginForm from '../components/LoginForm.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const welcomeUser = ()=> {
    toast('Welcome Back!', { position: toast.POSITION.BOTTOM_RIGHT });
    ownProps.history.push('/')
  }

  return {
    handleLoginSubmit: (e, loginEmail, loginPassword) => {
      e.preventDefault();
      dispatch(authenticateUser( 
        loginEmail, 
        loginPassword,
        welcomeUser()
      ));
    }
  }
}

const LoginFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));

export default LoginFormContainer
