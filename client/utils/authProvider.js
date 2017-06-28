import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { authSuccess, authFail } from 'actions/authActions';
import auth from 'utils/auth';

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      auth.removeJwtFromLocal();
      dispatch(authFail());
    }
  }
}

const provideAuthenticate = (component)=> {
  const authenticate = connect(mapStateToProps, mapDispatchToProps)(component);
  return authenticate
}

export default provideAuthenticate;