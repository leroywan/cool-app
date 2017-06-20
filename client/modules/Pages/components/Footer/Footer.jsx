import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { toast } from 'react-toastify';

import styles from './Footer.css';


export default class Footer extends React.Component {

  state = {
    registerEmail: null
  }

  changeRegisterEmail = (event) => {   
    this.setState({ registerEmail: event.target.value }, ()=>{
      console.log(this.state.registerEmail);
    });
  }

  changeRegisterUsername = (event) => {   
    this.setState({ registerUsername: event.target.value }, ()=>{
      console.log(this.state.registerUsername);
    });
  }

  changeRegisterPassword = (event) => {   
    this.setState({ registerPassword: event.target.value }, ()=>{
      console.log(this.state.registerPassword);
    });
  }

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    toast('Registering...')

    axios.post('/register', {
      email: this.state.registerEmail,
      username: this.state.registerUsername,
      password: this.state.registerPassword
    }).then(res => {
      if (res.data.success) {

      } else {

      }
    }).catch(err => {
      console.log(err);
      console.log('\n');
    });
  }

  render() {

  	let developmentMode = (<div style={{ "display": "inline-block", "position":"fixed", "bottom":"0", "right":"0", "background":"red", "color":"white", "padding":"10px", "opacity":"0.3"}}><p>DEVELOPMENT MODE</p></div>)
  	if (!DEVELOPMENT) {
  		developmentMode = (<div></div>);
  	}


    return (
      <footer className='footer' >
        <form action="/authenticate" method="POST">
          <input type='email' name='email'></input>
          <input name='username'></input>
          <input type='password' name='password'></input>
          <button type='submit'>Log In</button>
        </form>
        <form  
        method="POST" 
        onSubmit={ 
          (e)=>{
          this.handleRegisterSubmit(e);
          } 
        }>
          <input onChange={ this.changeRegisterEmail } type='email' name='email'></input>
          <input onChange={ this.changeRegisterUsername } name='username'></input>
          <input onChange={ this.changeRegisterPassword } type='password' name='password'></input>
          <button type="submit">Submit Form</button>
        </form>
        { developmentMode }
      </footer>
    );
  }
}