import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { authJwtSuccess, authJwtFail } from 'actions/authActions';
import auth from 'utils/auth';

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isAuthenticating: state.auth.isAuthenticating
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      console.log('signing out...')
      auth.signOut();
      dispatch(authJwtFail());
    }
  }
}

const provideAuthenticate = (component)=> {
  const authenticate = connect(mapStateToProps, mapDispatchToProps)(component);
  return authenticate
}

export default provideAuthenticate;