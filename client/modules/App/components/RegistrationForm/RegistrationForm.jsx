import React from 'react';
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import auth from 'utils/auth';

import { toast } from 'react-toastify';
import styles from './RegistrationForm.scss';


export default class RegistrationForm extends React.Component {

  state = {
    registerEmail: null,
  }

  changeRegisterEmail = (event) => {   
    this.setState({ registerEmail: event.target.value }, ()=>{
    });
  }

  changeRegisterPassword = (event) => {   
    this.setState({ registerPassword: event.target.value }, ()=>{
    });
  }

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const postBody = {
      email: this.state.registerEmail,
      password: this.state.registerPassword
    }

    axios.post('/api/register', postBody).then(res => {
      if (res.data.success) {
        toast('Success!');
        axios.post('/api/authenticate', postBody).then((res)=>{
          auth.addJwtToLocal(res.data.token);
        })
        this.setState({ loggedIn: true })
      } else {
        toast(res.data.message)
      }
    }).catch(err => {
      toast(err);
    });
  }

  loginJWT = () => {
    axios.get('/api/login').then(
      (res)=>{
        console.log(res);
      } 
    )
  }

  decodeJwt = () => {
    console.log(auth.getJwtUser());
  }


  render() {


    return (
      <div>
        <form  
        method="POST" 
        onSubmit={ 
          (e)=>{
          this.handleRegisterSubmit(e);
          } 
        }>
          <input onChange={ this.changeRegisterEmail } type='email' name='email'></input>
          <input onChange={ this.changeRegisterPassword } type='password' name='password'></input>
          <button type="submit">Submit Form</button>
        </form>
        <button onClick={ this.loginJWT }>log in with jwt</button>
        <button onClick={ this.decodeJwt }>Decode!</button>
      </div>
    );
  }
}