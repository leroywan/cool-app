import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { authSuccess, authFail, logoutSuccess } from 'actions/userActions';
import auth from 'utils/auth';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      auth.removeJwtFromLocal();
      auth.removeAuthorizationHeader();
      dispatch(logoutSuccess());
    }
  }
}

const provideAuthenticate = (component)=> {
  const authenticate = connect(mapStateToProps, mapDispatchToProps)(component);
  return authenticate
}

export default provideAuthenticate;