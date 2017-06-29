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

  render() {
    return (
      <div id="loginForm">
        <form  
        method="POST" 
        onSubmit={ (e)=> { this.props.handleLoginSubmit(e, this.state.loginEmail, this.state.loginPassword) } }>
          <h2>Login Here</h2>
          <input onChange={ this.changeLoginEmail } type='email' name='email'></input>
          <input onChange={ this.changeLoginPassword } type='password' name='password'></input>
          <button type="submit">Login</button>
          <button onClick={ (e)=>{ e.preventDefault(); console.log(this.props) } }>show state tree</button>
          <button onClick={ (e)=>{ e.preventDefault(); auth.refreshJwt() } }>Refresh Token</button>
        </form>
      </div>
    );
  }
}

