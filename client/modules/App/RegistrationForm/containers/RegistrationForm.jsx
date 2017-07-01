import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import auth from 'utils/auth';

import { receiveUserInfo, loginSuccess } from 'actions/userActions';

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
            // Note: authenticateUser() will dispatch RECEIVE_USER_INFO and LOGIN_SUCCESS
            // dispatch( authenticateUser(
            //   email, 
            //   password, 
            //   toast('Welcome!!!', { position: toast.POSITION.BOTTOM_RIGHT })
            // ) );

            let user = auth.getJwtUser();
            dispatch( receiveUserInfo(user) );
            dispatch( loginSuccess() );
            toast('Welcome!!!', { position: toast.POSITION.BOTTOM_RIGHT })

            // get user id and redirect to user profile page
            ownProps.history.push('/user/profile/' + user.userId);
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

const RegistrationFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm));

export default RegistrationFormContainer