import React from 'react';
import { Router, Route, Link, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
import store from '../store.js';

import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import About from './Pages/About/About.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*
	This file is a top level component where things are passed down to child components. 
	All routes within the app is defined within this file.
*/
import injectTapEventPlugin from 'react-tap-event-plugin';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import auth from 'utils/auth';


// enable tap event
injectTapEventPlugin();

// const loggerMiddleware = createLogger()
// let store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

export default class Routes extends React.Component {

  render() {
  	auth.setAuthorizationHeader();

    return (
    	<div>
	    	<Provider store={store}> 
		    	<MuiThemeProvider>
			      <Switch>
					    <Route exact path='/' component={Home}/>
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