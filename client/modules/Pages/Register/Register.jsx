import React from 'react';

import Navigation from '../../App/components/Header/Navigation.jsx';
import Footer from '../../App/components/Footer/Footer.jsx';
import RegistrationForm from '../../App/components/RegistrationForm/RegistrationForm.jsx';


export default class Register extends React.Component {

  render() {

    return (
      <div>
        <Navigation></Navigation>
     		<div className='page'>
     			<h1>Register Page</h1>
          <RegistrationForm/>
     		</div>
        <Footer></Footer>
      </div>
    );
  }
}