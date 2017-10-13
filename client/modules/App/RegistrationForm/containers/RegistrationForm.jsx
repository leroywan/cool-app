import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import auth from 'utils/auth';

import { fetchUser, loginSuccess } from 'actions/userActions';

import RegistrationForm from '../components/RegistrationForm.jsx';


const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    handleRegisterSubmit: (e, firstName, lastName, email, password) => {

      const postBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }

      // create new user with email and password
      axios.post('/api/register', postBody).then(res => {
        if (res.data.success) {
          // add new tokenly generated token to local storage
          auth.addJwtToLocal(res.data.token);
          let user = auth.getJwtUser();
          dispatch( loginSuccess() );
          // populate state tree with user data
          dispatch( fetchUser(user.userId) );
          toast('Welcome!!!', { position: toast.POSITION.BOTTOM_RIGHT })
          // redirect to application
          ownProps.history.push('/dashboard');
        } else {
          toast.error(res.data.message)
        }
      }).catch(err => {
        toast(err);
      });
    }
  }
}

const RegistrationFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm));

export default RegistrationFormContainer