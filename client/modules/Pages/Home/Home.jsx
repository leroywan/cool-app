import React from 'react';
import LoginForm from 'App/LoginForm/LoginForm.jsx';
import RegistrationForm from 'App/RegistrationForm/RegistrationForm.jsx';

export default class Home extends React.Component {

	state = {
		registrationSelected: false
	}

	toggleRegistration = ()=> {
		this.setState({ registrationSelected: !this.state.registrationSelected });
	}

  render() {

  	let form = this.state.registrationSelected ? <RegistrationForm className="fade-in" /> : <LoginForm className="fade-in" />
    let heading = this.state.registrationSelected ? "Register" : "Log In";
    let value = this.state.registrationSelected ? "Already a user? Log in here" : "Not a user? Register here";
    return (
      <div id="home" className='page'>
        <div className="form-wrapper row">
          <div className="info col-md-4 col-xs-12">
            <h2>{heading}</h2>
            <a href="#" onClick={ this.toggleRegistration }>{value}</a>
          </div>
          <div className="inputs col-md-8 col-xs-12">{ form }</div>
        </div>
      </div>
    );
  }
}
