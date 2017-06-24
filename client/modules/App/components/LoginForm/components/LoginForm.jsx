import React from 'react';
import ReactDOM from 'react-dom'

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
    const welcome = this.props.state.auth.isLoggedIn ? <h1> Hello { this.props.state.auth.userInfo.username }!</h1> : <h1>Hi Stranger!</h1>
    return (
      <div>
        { welcome }
        <form  
        method="POST" 
        onSubmit={ (e)=> { this.props.handleLoginSubmit(e, this.state.loginEmail, this.state.loginPassword) } }>
          <input onChange={ this.changeLoginEmail } type='email' name='email'></input>
          <input onChange={ this.changeLoginPassword } type='password' name='password'></input>
          <button type="submit">Login</button>
        </form>
        <button onClick={ ()=> { console.log(this.props) } }>show state tree</button>
      </div>
    );
  }
}