import React from 'react';
import ReactDOM from 'react-dom';

import auth from 'utils/auth';

export default class LoginForm extends React.Component {

  state = {
    loginEmail: null,
    loginPassword: null,
  }

  changeLoginEmail = (event) => {   
    this.setState({ loginEmail: event.target.value }, ()=>{
    });
  }

  changeLoginPassword = (event) => {   
    this.setState({ loginPassword: event.target.value }, ()=>{
    });
  }

  // redirect to dashboard if already logged on 
  componentWillUpdate(nextProps, nextState) {
     if (this.props.state.user.isLoggedIn) {
      this.props.history.push('/dashboard');
    } 
  }

  render() {
    return (
      <div id="loginForm" className={ this.props.className }>
        <form  
        method="POST" 
        onSubmit={ (e)=> { this.props.handleLoginSubmit(e, this.state.loginEmail, this.state.loginPassword) } }>
          <div className="input-wrapper">   
            <label htmlFor="email">Email</label>    
            <input placeholder="" onChange={ this.changeLoginEmail } type='email' name='email'></input>
            <label htmlFor="password">Password</label>  
            <input placeholder="" onChange={ this.changeLoginPassword } type='password' name='password'></input> 
          </div>
          <div className="submit-wrapper">
            <button type="submit">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

