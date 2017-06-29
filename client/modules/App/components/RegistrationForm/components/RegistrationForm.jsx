import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

import { toast } from 'react-toastify';


export default class RegistrationForm extends React.Component {

  state = {
    registerEmail: null,
    registerPassword: null,
  }

  changeRegisterEmail = (event) => {   
    this.setState({ registerEmail: event.target.value }, ()=>{
    });
  }

  changeRegisterPassword = (event) => {   
    this.setState({ registerPassword: event.target.value }, ()=>{
    });
  }

  render() {
    return (
      <div id="registrationForm">
        <form  
        method="POST" 
        onSubmit={ 
          (e)=>{
            e.preventDefault();
            this.props.handleRegisterSubmit(e, this.state.registerEmail, this.state.registerPassword);
          } 
        }>
          <h2>Register Now!</h2>
          <input onChange={ this.changeRegisterEmail } type='email' name='email'></input>
          <input onChange={ this.changeRegisterPassword } type='password' name='password'></input>
          <button type="submit">Submit Form</button>
        </form>
      </div>
    );
  }
}