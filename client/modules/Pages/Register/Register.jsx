import React from 'react';

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import RegistrationForm from '../../App/components/RegistrationForm/RegistrationForm.jsx';


import styles from './Register.scss';


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