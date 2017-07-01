import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import auth from 'utils/auth';

import { connect } from 'react-redux';
import { authenticateUser } from 'actions/authActions';

import { toast } from 'react-toastify';

import RegistrationForm from '../components/RegistrationForm.jsx';


const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    handleRegisterSubmit: (e, email, password) => {

      const postBody = {
        email: email,
        password: password,
      }

      // create new user with email and password
      axios.post('/api/register', postBody).then(res => {
        if (res.data.success) {
          // use authenticate api to return a token to the user
          axios.post('/api/authenticate', postBody).then((res)=>{
            auth.addJwtToLocal(res.data.token);
            // log the user in once they're authenticated
            dispatch( authenticateUser(
              email, 
              password, 
              toast('Welcome!!!', { position: toast.POSITION.BOTTOM_RIGHT })
            ) );
          })
        } else {
          toast(res.data.message)
        }
      }).catch(err => {
        toast(err);
      });
    }
  }
}

const RegistrationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default RegistrationFormContainer