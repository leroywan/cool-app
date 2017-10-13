import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

import { toast } from 'react-toastify';


export default class RegistrationForm extends React.Component {

  state = {
    registerFirstName: null,
    registerLastName: null,
    registerEmail: null,
    registerPassword: null,
  }

  changeRegisterFirstName = (event) => {   
    this.setState({ registerFirstName: event.target.value }, ()=>{
    });
  }
  changeRegisterLastName = (event) => {   
    this.setState({ registerLastName: event.target.value }, ()=>{
    });
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
      <div id="registrationForm" className={ "row " + this.props.className }>
        <form  
        className="col-xs-12"
        method="POST" 
        onSubmit={ 
          (e)=>{
            e.preventDefault();
            this.props.handleRegisterSubmit(
              e, 
              this.state.registerFirstName, 
              this.state.registerLastName,
              this.state.registerEmail, 
              this.state.registerPassword
            );
          } 
        }>
          <div className="input-wrapper"> 
            <label htmlFor="firstName">First Name</label>  
            <input onChange={ this.changeRegisterFirstName } type='text' name='firstName'></input>
            <label htmlFor="lastName">Last Name</label> 
            <input onChange={ this.changeRegisterLastName } type='text' name='lastName'></input>
            <label htmlFor="email">Email</label>    
            <input placeholder="" onChange={ this.changeRegisterEmail } type='email' name='email'></input>
            <label htmlFor="password">Password</label>  
            <input placeholder="" onChange={ this.changeRegisterPassword } type='password' name='password'></input> 
          </div>
          <div className="submit-wrapper">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}