import React from 'react';

import LoginForm from 'App/LoginForm/LoginForm.jsx';
import RegistrationForm from 'App/RegistrationForm/RegistrationForm.jsx';



export default class Login extends React.Component {

  render() {

    return (
      <div>
     		<div className='page'>
     			<h1>Login Page</h1>
            <LoginForm/>
            <RegistrationForm/>
        </div>
      </div>
    );
  }
}