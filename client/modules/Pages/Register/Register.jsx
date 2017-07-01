import React from 'react';

import RegistrationForm from 'App/RegistrationForm/RegistrationForm.jsx';


export default class Register extends React.Component {

  render() {

    return (
      <div>
     		<div className='page'>
     			<h1>Register Page</h1>
          <RegistrationForm/>
     		</div>
      </div>
    );
  }
}