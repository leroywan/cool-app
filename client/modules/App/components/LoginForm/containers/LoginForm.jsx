import React from 'react';
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import auth from 'utils/auth';
import { connect } from 'react-redux'

import { toast } from 'react-toastify';

import { authenticateUser } from 'actions/authActions';

import LoginForm from '../components/LoginForm.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    handleLoginSubmit: (e, loginEmail, loginPassword) => {
      e.preventDefault();
      dispatch(authenticateUser( loginEmail, loginPassword ));
    }
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer
