import React from 'react';

import Navigation from '../components/Header/Navigation.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LoginForm from '../../App/components/LoginForm/LoginForm.jsx';


import styles from './Login.scss';


export default class Login extends React.Component {

  render() {

    return (
      <div>
        <Navigation></Navigation>
     		<div className='page'>
     			<h1>Login Page</h1>
          <LoginForm/>
     		</div>
        <Footer></Footer>
      </div>
    );
  }
}