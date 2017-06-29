import React from 'react';

import Navigation from '../../App/components/Header/Navigation.jsx';
import Footer from '../../App/components/Footer/Footer.jsx';
import LoginForm from '../../App/components/LoginForm/LoginForm.jsx';



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