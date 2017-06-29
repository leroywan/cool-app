import React from 'react';
import { Router, Route, Link, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Provider, connect } from 'react-redux';
import store from '../store.js';

import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import About from './Pages/About/About.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import App from './App/App.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*
	This file is a top level component where things are passed down to child components. 
	All routes within the app is defined within this file.
*/
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ToastContainer } from 'react-toastify';

import auth from 'utils/auth';
import { authSuccess, authFail, receiveUserInfo } from 'actions/authActions';



// enable tap event
injectTapEventPlugin();

// authenticate jwt everytime user change pages
const authenticateJwt = () => {
	if (auth.isAuthenticated()) {
		store.dispatch(authSuccess());
		store.dispatch(receiveUserInfo(auth.getJwtUser()));
		auth.refreshJwt();
		auth.setAuthorizationHeader();
	} else {
		store.dispatch(authFail());
	}
}

export default class Routes extends React.Component {

	componentWillMount() {
		authenticateJwt();
	}

	componentWillUpdate() {
		authenticateJwt();
	}

  render() {
    return (
    	<div>
	    	<Provider store={store}> 
		    	<MuiThemeProvider>
			      <Switch>
					    <Route exact path='/' component={App}/>
					    <Route exact path='/login' component={Login}/>
					    <Route exact path='/register' component={Register}/>
					    <Route exact path='/about' component={About}/>
					    <Route exact path='/testRoute' component={About}/>
					    <Route exact path='/user/profile/:userId' component={About} />
					    <Route path='*' component={NotFound}/>
				  	</Switch>
			 	  </MuiThemeProvider>
		 	  </Provider>
		 	  <ToastContainer/>
	 	  </div>
    )
  }
}
